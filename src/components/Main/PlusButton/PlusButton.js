import { LitElement, html, css } from 'lit';
import styles from '/src/components/Main/PlusButton/PlusButton.css?inline';

export class PlusButton extends LitElement {
  static properties = {
    active: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.active = false;
  }

  handleClick() {
    this.active = !this.active;
    this.dispatchEvent(
      new CustomEvent('active-change', {
        detail: { active: this.active },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <button
        type="button"
        aria-pressed="${this.active}"
        aria-label="${this.active ? '활성화' : '비활성화'}"
        @click="${this.handleClick}"
      >
        +
      </button>
    `;
  }
}

customElements.define('plus-button', PlusButton);
