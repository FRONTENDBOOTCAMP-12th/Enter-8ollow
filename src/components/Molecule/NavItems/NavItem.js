import { LitElement, html } from 'lit';
import { styles } from '/src/components/Molecule/NavItems/NavItemCSS?inline';

export class NavItem extends LitElement {
  static properties = {
    label: { type: String },
    isActive: { type: Boolean },
  };

  static styles = styles;

  constructor() {
    super();
    this.label = 'text';
    this.isActive = false;
  }

  render() {
    return html`
      <button class="nav-item ${this.isActive ? 'active' : ''}">
        ${this.label}
      </button>
    `;
  }
}

customElements.define('nav-item', NavItem);
