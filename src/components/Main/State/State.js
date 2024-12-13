import { LitElement, html, css } from 'lit';
import '../State/State.css';

class MainState extends LitElement {
  static properties = {
    status: { type: String },
    price: { type: Number },
  };

  constructor() {
    super();
    this.status = '';
    this.price = 0;
  }

  get displayStatus() {
    if (this.status === 'reserved') return '예약중';
    if (this.status === 'complete') return '거래완료';
    return '';
  }

  get formattedPrice() {
    return this.price ? `${this.price.toLocaleString()}원` : '';
  }

  render() {
    let statusClass = 'status hidden';

    if (this.status === 'reserved') {
      statusClass = 'status reserved';
    } else if (this.status === 'complete') {
      statusClass = 'status complete';
    }

    return html`
      <div class="container">
        <div class="${statusClass}">${this.displayStatus}</div>
        <div class="price">${this.formattedPrice}</div>
      </div>
    `;
  }
}

customElements.define('main-state', MainState);
