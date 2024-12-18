import { LitElement, html, css } from 'lit';
import styles from '/src/components/Main/Like/Like.css?inline';

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
        ${styles}
      </style>
      <div class="plus-button-container">
        <button
          class="like-button ${this.liked ? 'liked' : ''}"
          type="button"
          aria-pressed="${this.liked}"
          aria-label="좋아요 버튼"
          @click="${this.toggleLike}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            stroke-width="2"
            class="heart-icon"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <span class="count">${this.liked_count}</span>
        </button>
      </div>
    `;
  }
}

customElements.define('like-counter', LikeCounter);
