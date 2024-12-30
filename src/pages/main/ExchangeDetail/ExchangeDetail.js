import { LitElement, html } from 'lit';
import pb from '/src/api/pocketbase';
import defaultImage from '/src/assets/logo.svg';
import ExchangeDetailCSS from '/src/pages/main/ExchangeDetail/ExchangeDetailCSS.js';
import heartIcon from '/src/assets/heart.svg';
import heartSolid from '/src/assets/heartSolid.svg';

// 카테고리 한글 매핑
const categoryMap = {
  Headset: '헤드셋',
  Keyboard: '키보드',
  Mouse: '마우스',
  Computer: '컴퓨터',
  Etc: '기타등등',
};

// 카테고리를 한글로 변환하는 함수
function translateCategory(category) {
  return categoryMap[category] || '기타';
}

// 시간 경과 함수
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

class ExchangeDetail extends LitElement {
  static get properties() {
    return {
      post: { type: Object },
      postId: { type: String },
      liked: { type: Boolean },
      relatedItems: { type: Array },
      currentTemp: { type: Number },
      initialTemp: { type: Number },
    };
  }

  static styles = ExchangeDetailCSS;

  constructor() {
    super();
    this.post = null;
    this.postId = this.getPostIdFromUrl();
    this.liked = false; // 초기 상태
    this.relatedItems = [];
    this.initialTemp = 36.5; // 기본 초기 온도
    this.currentTemp = this.initialTemp; // 현재 온도 초기화
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
      console.log(localStorage.getItem('isLogin')); // 로컬 스토리지 값 출력
      const loginData = JSON.parse(localStorage.getItem('isLogin'));
      const userId = loginData ? loginData.UID : null;

      const record = await pb.collection('exchangePosts').getOne(this.postId);
      console.log('받아온 데이터:', record);

      // 좋아요 상태 확인
      this.liked = userId ? record.liked_count.includes(userId) : false; // liked 상태 설정
      this.post = record;

      // 유저 정보 가져오기
      if (record.author) {
        const userRecord = await pb.collection('members').getOne(record.author); // members 컬렉션에서 author 정보 가져오기
        this.post.authorNickName = userRecord.nickName || '알 수 없음'; // 닉네임 설정
        this.post.authorProfileImage = userRecord.profileImage
          ? pb.files.getURL(userRecord, userRecord.profileImage) // profileImage의 URL 생성
          : defaultImage; // 기본 이미지 사용
      } else {
        this.post.authorNickName = '알 수 없음';
        this.post.authorProfileImage = defaultImage;
      }

      // 온도 계산 및 업데이트
      this.calculateTemperature(record.status || '');

      this.requestUpdate();

      // 연관 글 데이터 렌더링
      this.fetchRelatedItems(record);
    } catch (error) {
      console.error('API 요청 에러:', error.message);
    }
  }

  // 온도 계산 함수
  calculateTemperature(status) {
    let increment = 0;
    if (status.toLowerCase() === 'complete') {
      increment = 1.0; // 거래 완료일 경우 증가량
    } else if (status.toLowerCase() === 'reserved') {
      increment = 0.5; // 예약 상태일 경우 증가량
    }
    this.currentTemp = this.initialTemp + increment; // 현재 온도 업데이트
    this.requestUpdate();
  }

  // 연관 글 데이터 가져오기
  async fetchRelatedItems({ id: postId, category }) {
    try {
      if (!category || category.trim() === '') {
        console.error('유효하지 않은 카테고리 값:', category);
        return;
      }
      const trimmedCategory = category.trim();
      const filter = `category = "${trimmedCategory}" && id != "${postId}"`;

      const list = await pb.collection('exchangePosts').getList(0, 6, {
        filter,
        sort: '-created',
      });

      console.log('받아온 연관 글 목록:', list);
      this.relatedItems = list.items;
      this.requestUpdate();
    } catch (error) {
      console.error('연관 글 목록을 가져오는 중 에러:', error.message);
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
            <a href="/src/pages/main/ExchangeDetail/index.html?post=${item.id}">
              <img
                src=${this.getPbImagesURL(item)}
                alt="관련 글 ${index + 1}"
                class="related-item-image"
              />
              <h4 class="related-item-title">${item.title}</h4>
              <p class="related-item-price">${item.price.toLocaleString()}원</p>
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

  // 좋아요 토글 및 업데이트
  async toggleLike() {
    console.log(localStorage.getItem('isLogin')); // 로컬 스토리지 값 출력
    const loginData = JSON.parse(localStorage.getItem('isLogin'));
    console.log('Parsed loginData:', loginData); // 파싱 데이터

    // UID를 userId로 사용
    const userId = loginData ? loginData.UID : null;
    if (!userId) {
      console.error('로그인이 필요한 상태: loginData가 유효하지 않음');
      alert('로그인이 필요합니다.');
      return;
    }

    const likedBefore = this.liked;

    // 좋아요 상태 변경
    this.liked = !likedBefore;
    this.post.liked_count = likedBefore
      ? this.post.liked_count.filter((id) => id !== userId) // 기존에 좋아요한 경우 제거
      : [...(this.post.liked_count || []), userId]; // 새로운 좋아요 추가

    this.requestUpdate();

    try {
      // pocketBase에 업데이트 요청
      await pb.collection('exchangePosts').update(this.postId, {
        liked_count: this.post.liked_count,
      });
      console.log(`좋아요 상태 업데이트: ${this.liked}`);
    } catch (error) {
      console.error('좋아요 업데이트 실패:', error.message);
      // 업데이트 실패 시 상태 복구
      this.liked = likedBefore;
      this.post.liked_count = likedBefore
        ? [...(this.post.liked_count || []), userId]
        : this.post.liked_count.filter((id) => id !== userId);
      this.requestUpdate();
    }
  }

  render() {
    if (!this.post) {
      return html`<p>로딩중...</p>`;
    }

    const {
      title,
      price,
      description,
      created,
      category,
      authorNickName,
      region,
    } = this.post;

    const isComplete = this.post?.status?.trim().toLowerCase() === 'complete';
    const buttonClass = isComplete ? 'chat-button disabled' : 'chat-button';

    return html`
      <div class="detail-container">
        <img
          class="detail-image"
          src="${this.getPbImagesURL(this.post)}"
          alt="상품 이미지"
        />

        <div class="profile-container">
          <div class="profile-info">
            <img
              class="profile-image"
              src="${this.post.authorProfileImage}"
              alt="프로필 이미지"
            />

            <div class="profile-text">
              <p class="profile-author">${authorNickName}</p>
              <p class="profile-region">${region}</p>
            </div>
          </div>
          <div class="profile-temp">
            <p class="current-temp">${this.currentTemp.toFixed(1)}℃ 😊</p>
            <p class="manner-label">매너온도</p>
          </div>
        </div>
        <div class="post-details">
          <h2 class="post-title">${title}</h2>

          <div class="post-meta">
            <p class="post-category">${translateCategory(category)}•</p>
            <p class="post-created">
              ${created ? elapsedTime(created) : '등록일 정보 없음'}
            </p>
          </div>
        </div>

        <p class="post-description">${description}</p>
        <div class="separator" aria-hidden="true"></div>
        <div class="footer-container">
          <div class="footer-left">
            <button
              class="footer-btn"
              type="button"
              aria-pressed="${this.liked}"
              aria-label="관심글 등록"
              @click="${this.toggleLike}"
            >
              <img
                src="${this.liked ? heartSolid : heartIcon}"
                class="heart-icon"
                alt="하트 아이콘"
              />
            </button>
            <div>
              <p class="footer-price">${price.toLocaleString()}원</p>
              <p class="footer-price-proposal">가격제안하기</p>
            </div>
          </div>
          <button class="chat-button ${buttonClass}" ?disabled="${isComplete}">
            ${isComplete ? '거래 완료' : '채팅하기'}
          </button>
        </div>
      </div>

      <!-- 연관글 목록 -->
      <section class="related-container">
        <h3 class="related-title">이 글과 함께 봤어요!</h3>
        <ul class="related-list" aria-label="연관 글 목록">
          ${this.renderRelatedItems()}
        </ul>
      </section>
    `;
  }
}

customElements.define('exchange-detail', ExchangeDetail);
