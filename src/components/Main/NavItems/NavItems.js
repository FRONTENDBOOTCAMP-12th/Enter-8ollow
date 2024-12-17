import { LitElement, html, css } from 'lit';
import '/src/components/Main/NavItems/NavItem.js';
import s from '/src/components/Main/NavItems/NavItems.css?inline';

export class NavItems extends LitElement {
  static properties = {
    items: { type: Array },
    activeIndex: { type: Number },
  };

  constructor() {
    super();
    this.items = ['선배님 스토리', '기기 거래', '질의 응답', '함께 해요'];
    this.activeIndex = 0;
  }

  handleItemClick(index) {
    this.activeIndex = index;
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="nav-items">
        ${this.items.map(
          (item, index) => html`
            <nav-item
              .label="${item}"
              .isActive="${this.activeIndex === index}"
              @click="${() => this.handleItemClick(index)}"
            ></nav-item>
          `
        )}
      </div>
    `;
  }
}

customElements.define('nav-items', NavItems);
