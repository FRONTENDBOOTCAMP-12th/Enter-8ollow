import { LitElement, html, css } from 'lit';
import s from '/src/components/Main/NavItems/NavItem.css?inline';

export class NavItem extends LitElement {
  static properties = {
    label: { type: String },
    isActive: { type: Boolean },
  };

  constructor() {
    super();
    this.label = 'text';
    this.isActive = false;
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="nav-item ${this.isActive ? 'active' : ''}">${this.label}</div>
    `;
  }
}

customElements.define('nav-item', NavItem);
