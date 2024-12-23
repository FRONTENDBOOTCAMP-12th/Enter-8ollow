import { LitElement, html } from 'lit';
import ListItemCSS from '/src/components/Main/ListItem/ListItemCSS';
import heartIcon from '/src/assets/heart.svg';

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

class ListItem extends LitElement {
  static properties = {
    item: { type: Object },
    liked: { type: Boolean },
    liked_count: { type: Number },
  };

  static styles = ListItemCSS;

  constructor() {
    super();
    this.item = {};
    this.liked = false;
    this.liked_count = 0;
  }

  toggleLike() {
    this.liked = !this.liked;
    this.liked_count += this.liked ? 1 : -1;
    this.dispatchEvent(
      new CustomEvent('like-toggled', {
        detail: { liked: this.liked },
        bubbles: true,
        composed: true,
      })
    );
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.toggleLike();
    }
  }

  get displayStatus() {
    const status = this.item.state?.trim().toLowerCase();
    if (status === 'reserved') return '예약중';
    if (status === 'complete') return '거래 완료';
    return ''; // 판매중 상태일 때 빈 값 반환
  }

  get formattedPrice() {
    return this.item.price ? `${this.item.price.toLocaleString()}원` : '';
  }

  render() {
    const isAvailable = this.item.state?.trim().toLowerCase() === 'available';
    const statusClass = isAvailable ? 'hidden' : `status ${this.item.state}`;

    return html`
      <div class="list-item" tabindex="0">
        <figure>
          <img
            src="${this.item.image}"
            alt="${this.item.title || '상품 이미지'}"
          />
        </figure>
        <div class="content">
          <ul>
            <li class="title">${this.item.title || '제목 없음'}</li>
            <li class="subtitle">
              ${this.item.region || '지역 없음'} •
              ${elapsedTime(this.item.created)}
            </li>
            <li>
              <div class="container">
                <div class="${statusClass}">${this.displayStatus}</div>
                <div class="price">${this.formattedPrice}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="like-container">
          <button
            class="like-button ${this.liked ? 'liked' : ''}"
            type="button"
            aria-pressed="${this.liked}"
            aria-label="좋아요 버튼"
            @click="${this.toggleLike}"
            @keydown="${this.handleKeyPress}"
          >
            <img src="${heartIcon}" class="heart-icon" alt="하트 아이콘" />
            <span class="count">${this.liked_count}</span>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('list-item', ListItem);
