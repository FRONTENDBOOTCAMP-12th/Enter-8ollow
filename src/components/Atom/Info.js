import { LitElement, html, css } from 'lit';

class InfoComponent extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }

    .info {
      display: block;
      background-color: #8db0f9;
      border-radius: 10px;
      padding: 12px 16px;
      color: white;
      font-family: 'Pretendard', sans-serif;
      font-size: 10.5px;
      font-weight: 400;
    }

    strong {
      font-weight: 600;
    }

    a {
      color: white;
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <link rel="stylesheet" href="${this.cssPath}" />
      <p class="info">
        <strong>안내</strong> 중고거래 관련, 명예훼손, 광고/홍보 목적의 글은
        올리실 수 없어요.<a href="#">Q&A 운영정책</a>
      </p>
    `;
  }
}

customElements.define('info-component', InfoComponent);
