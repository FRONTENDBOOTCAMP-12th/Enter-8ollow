import { LitElement, html } from 'lit';
import styles from '/src/components/Main/ListItem/ListItem.css?inline';
import '/src/components/Main/State/State';
import '/src/components/Main/Like/Like';

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
  static get properties() {
    return {
      item: { type: Object },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <div class="list-item">
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
              <main-state
                status="${this.item.state || 'available'}"
                price="${this.item.price || 0}"
              ></main-state>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('list-item', ListItem);
