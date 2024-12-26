import { LitElement, html, css } from 'lit';
import styles from '/src/components/Main/State/State.css?inline';

class MainState extends LitElement {
  static properties = {
    status: { type: String },
    price: { type: Number },
  };

  constructor() {
    super();
    this.status = 'available';
    this.price = 0;
  }

  get displayStatus() {
    const status = this.status?.trim().toLowerCase(); // null 체크 및 소문자 변환
    if (status === 'reserved') return '예약중';
    if (status === 'complete') return '거래 완료';
    return ''; // 판매중 상태일 때 빈 값 반환
  }

  get formattedPrice() {
    return this.price ? `${this.price.toLocaleString()}원` : '';
  }

  render() {
    const isAvailable = this.status?.trim().toLowerCase() === 'available';
    const statusClass = isAvailable ? 'hidden' : `status ${this.status}`;

    return html`
      <style>
        ${styles} .hidden {
          display: none; /* 상태가 판매중일 때 숨김 처리 */
        }
      </style>
      <div class="container">
        <div class="${statusClass}">${this.displayStatus}</div>
        <div class="price">${this.formattedPrice}</div>
      </div>
    `;
  }
}

customElements.define('main-state', MainState);
