import { LitElement, html, css } from 'lit';

class MainState extends LitElement {
  static properties = {
    status: { type: String },
    price: { type: Number },
  };

  static styles = css`
    .container {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .status {
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
      font-weight: 600;
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .status.hidden {
      display: none;
    }

    .status.reserved {
      background-color: #719cf7;
      color: white;
    }

    .status.complete {
      background-color: #9da1b4;
      color: white;
    }

    .price {
      font-size: 0.875rem;
      font-weight: 600;
      color: black;
      white-space: nowrap;
    }
  `;

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
