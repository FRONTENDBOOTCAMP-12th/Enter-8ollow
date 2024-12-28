// 외부 라이브러리 및 리소스 임포트
import { LitElement, html } from 'lit';
import {} from '/src/components/index.js';
import defaultImage from '/src/assets/logo.svg';
import ExchangeDetailCSS from '/src/pages/main/ExchangeDetail/ExchangeDetailCSS.js';
import heartIcon from '/src/assets/heart.svg';

// 헬퍼 함수: 경과 시간 계산
function elapsedTime(created) {
  const createTimestamp = new Date(created);
  const nowTimestamp = new Date();

  const seconds = Math.floor((nowTimestamp - createTimestamp) / 1000);
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (seconds < 60) return '방금 전';
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  if (days < 7) return `${Math.floor(days)}일 전`;
  if (days < 30) return `${Math.floor(days / 7)}주 전`;
  if (days < 365) return `${Math.floor(days / 30)}달 전`;
  return '오래 전';
}

// LitElement 정의
class ExchangeDetail extends LitElement {
  // 속성 정의
  static get properties() {
    return {
      post: { type: Object },
      postId: { type: String },
      liked: { type: Boolean },
      relatedItems: { type: Array },
    };
  }

  // 생성자
  constructor() {
    super();
    this.post = null;
    this.postId = this.getPostIdFromUrl();
    this.liked = false;
    this.relatedItems = [];
    this.fetchPost();
  }

  // URL에서 Post ID 가져오기
  getPostIdFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('post');
  }

  // 현재 포스트 데이터 가져오기
  async fetchPost() {
    try {
      const record = await pb.collection('exchangePosts').getOne(this.postId);
      console.log('받아온 데이터:', record);
      this.post = record;
      this.requestUpdate();

      // 연관 글 데이터 렌더링
      this.renderRelatedList(record);
    } catch (error) {
      console.error('API 요청 에러:', error.message);
    }
  }

  // 연관 글 목록 가져오기
  async renderRelatedList({ id: postId, category }) {
    try {
      if (!category || category.trim() === '') {
        console.error('유효하지 않은 카테고리 값:', category);
        return;
      }
      const trimmedCategory = category.trim();
      const filter = `category = "${trimmedCategory}" && id != "${postId}"`;

      console.log('필터 조건:', filter);

      const list = await pb.collection('exchangePosts').getList(0, 6, {
        filter,
        sort: '-created',
      });

      console.log('받아온 연관 글 목록:', list);
      this.relatedItems = list.items;
      this.requestUpdate();
    } catch (err) {
      console.error('연관 글 목록을 가져오는 중 에러:', err.message);
      alert('연관 글 데이터를 불러오는데 실패했습니다.');
    }
  }

  // 연관 글 목록 렌더링
  renderRelatedItems() {
    if (!this.relatedItems || this.relatedItems.length === 0) {
      return html`<p>연관 글이 없습니다.</p>`;
    }

    return this.relatedItems.map(
      (item, index) => html`
        <li class="related-item">
          <article>
            <a href="/pages/exchange-detail/index.html?post=${item.id}">
              <img
                src=${this.getPbImagesURL(item)}
                alt="관련 글 ${index + 1}"
                class="related-item-image"
              />
              <h4 class="related-item-title">${item.title}</h4>
              <strong class="related-item-price">
                ${item.price.toLocaleString()}원
              </strong>
            </a>
          </article>
        </li>
      `
    );
  }

  // 이미지 URL 가져오기
  getPbImagesURL(item) {
    if (!item.image) {
      return defaultImage;
    }
    return pb.files.getURL(item, item.image);
  }

  // 좋아요 토글
  toggleLike() {
    this.liked = !this.liked;
    this.requestUpdate();
  }

  // 메인 이미지 URL 가져오기
  getImageURL() {
    if (!this.post || !this.post.image) {
      return defaultImage;
    }
    return pb.files.getURL(this.post, this.post.image);
  }

  // 판매 상태 표시
  get displayStatus() {
    const status = this.post?.status?.trim().toLowerCase();
    if (status === 'reserved') return '예약중';
    if (status === 'complete') return '거래 완료';
    return '판매중';
  }

  // 스타일 지정
  static styles = ExchangeDetailCSS;

  // 렌더링
  render() {
    if (!this.post) {
      return html`<p>로딩중...</p>`;
    }

    const { title, price, liked_count, description, created, category } =
      this.post;

    const isComplete = this.post?.status?.trim().toLowerCase() === 'complete';
    const buttonClass = isComplete ? 'chat-button disabled' : 'chat-button';

    return html`
      <div class="detail-container">
        <figure>
          <img
            class="detail-image"
            src="${this.getImageURL()}"
            alt="상품 이미지"
          />
        </figure>
        <p class="post-state hidden" aria-hidden="true">
          ${this.displayStatus}
        </p>

        <div class="details-container">
          <p class="category">${category} •</p>
          <p class="created">
            ${created ? elapsedTime(created) : '등록일 정보 없음'}
          </p>
        </div>

        <h2 class="post-title">${title}</h2>
        <p class="description">${description}</p>

        <div class="footer">
          <div class="footer-left">
            <p class="liked_count">${liked_count}</p>
            <button
              id="interest-btn"
              type="button"
              aria-pressed="${this.liked}"
              aria-label="관심글 등록"
            >
              <img
                src="${heartIcon}"
                class="heart-icon ${this.liked ? 'liked' : ''}"
                alt="하트 아이콘"
                @click="${this.toggleLike}"
              />
            </button>
            <div>
              <p class="price-container">${price.toLocaleString()}원</p>
              <p>가격제안하기</p>
            </div>
          </div>
          <button class="chat-btn ${buttonClass}" ?disabled="${isComplete}">
            ${isComplete ? '거래 완료' : '채팅하기'}
          </button>
        </div>
        <div class="separator" aria-hidden="true"></div>
      </div>
      <!-- 연관글 목록 -->
      <section class="related-section">
        <h3 class="related-title">이 글과 함께 봤어요</h3>
        <ul class="related-list" aria-label="연관 글 목록">
          ${this.renderRelatedItems()}
        </ul>
      </section>
    `;
  }
}

// 컴포넌트 등록
customElements.define('exchange-detail', ExchangeDetail);
