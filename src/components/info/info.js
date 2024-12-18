import { LitElement, html } from 'lit';

class InfoComponent extends LitElement {
  constructor() {
    super();

    this.cssPath = './../../components/info/info.css';
  }

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
