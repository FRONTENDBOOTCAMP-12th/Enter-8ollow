import { LitElement, html } from 'lit';
import s from '/src/components/Main/Like/Like.css?inline';
import heartIcon from '/src/assets/heart.svg';
class LikeCounter extends LitElement {
  static properties = {
    liked: { type: Boolean },
    liked_count: { type: Number },
  };

  constructor() {
    super();
    this.liked_count = 0;
    this.liked = false;
  }

  toggleLike() {
    // 좋아요 상태 토글
    this.liked = !this.liked;

    // 카운트 값 변경
    this.liked_count += this.liked ? 1 : -1;

    // 부모 컴포넌트로 이벤트 전달
    this.dispatchEvent(
      new CustomEvent('like-toggled', {
        detail: { liked: this.liked },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="plus-button-container">
        <button
          class="like-button ${this.liked ? 'liked' : ''}"
          type="button"
          aria-pressed="${this.liked}"
          aria-label="좋아요 버튼"
          @click="${this.toggleLike}"
        >
          <img src="${heartIcon}" alt="Heart Icon" class="heart-icon" />
          <span class="count">${this.liked_count}</span>
        </button>
      </div>
    `;
  }
}

customElements.define('like-counter', LikeCounter);
