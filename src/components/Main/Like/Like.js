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
    this.liked = !this.liked;
    this.liked_count += this.liked ? 1 : -1;
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <button
        type="button"
        class="like-button ${this.liked ? 'liked' : ''}"
        aria-pressed="${this.liked}"
        aria-label="좋아요 버튼"
        @click="${this.toggleLike}"
      >
        <img src="/src/assets/heart.svg" alt="Heart Icon" class="heart-icon" />
        <span class="liked_count">${this.liked_count}</span>
      </button>
    `;
  }
}

customElements.define('like-counter', LikeCounter);
