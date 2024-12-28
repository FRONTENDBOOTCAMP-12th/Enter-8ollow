import { LitElement, html } from 'lit';
import {} from '/src/components/index.js';
import defaultImage from '/src/assets/logo.svg';

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
    };
  }

  constructor() {
    super();
    this.post = null;
    this.postId = this.getPostIdFromUrl();
    this.fetchPost();
  }

  getPostIdFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('post');
  }

  async fetchPost() {
    const apiUrl = `${import.meta.env.VITE_PB_API}/collections/exchangePosts/records/${this.postId}`;
    console.log('API 경로 확인:', apiUrl);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.statusText}`);
      }
      this.post = await response.json();
      console.log('받아온 데이터:', this.post);
    } catch (error) {
      console.error('API 요청 에러:', error.message);
    }
  }

  // 이미지 URL 생성 함수
  getImageURL() {
    if (!this.post || !this.post.image) {
      return defaultImage; // 기본 이미지 경로 반환
    }
    return `${import.meta.env.VITE_PB_API}/files/${this.post.collectionId}/${this.post.id}/${this.post.image}`;
  }

  get displayStatus() {
    const status = this.post?.status?.trim().toLowerCase();
    if (status === 'reserved') return '예약중';
    if (status === 'complete') return '거래 완료';
    return '판매중';
  }

  handleCancel() {
    history.back();
  }

  render() {
    if (!this.post) {
      return html`<p>로딩중...</p>`;
    }

    const { title, price, liked_count, description, created, category } =
      this.post;

    return html`
      <div class="detail-container">
        <figure>
          <img
            class="detail-image"
            src="${this.getImageURL()}"
            alt="상품 이미지"
          />
        </figure>
        <div class="detail-content">
          <p class="post-state">${this.displayStatus}</p>

          <h1 class="post-title">${title}</h1>
          <p class="category">카테고리: ${category}</p>
          <p class="created">
            등록일: ${created ? elapsedTime(created) : '등록일 정보 없음'}
          </p>
          <p class="description">설명: ${description}</p>
          <p class="liked_count">좋아요: ${liked_count}</p>
        </div>
        <p class="price">가격: ${price.toLocaleString()}원</p>
        <p>가격제안하기</p>
        <button class="back-button" @click=${() => history.back()}>
          뒤로가기
        </button>
        <button class="chat">chat</button>
      </div>
    `;
  }
}

customElements.define('exchange-detail', ExchangeDetail);
