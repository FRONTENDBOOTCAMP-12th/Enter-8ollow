import { LitElement, html } from 'lit';
import {} from '/src/components/Molecule/NavItems/NavItem';
import { styles } from '/src/components/Molecule/NavItems/NavItemsCSS?inline';

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

  static styles = styles;

  handleItemClick(index) {
    this.dispatchEvent(
      new CustomEvent('change-event', {
        bubbles: true,
        composed: true,
        detail: { index },
      })
    );
    this.activeIndex = index;
  }

  render() {
    return html`
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
