import { LitElement, html } from 'lit';
import s from '/src/components/signUp/authButton/authButton.css?inline';

class AuthButton extends LitElement {
  static properties = {
    title: { type: String },
    disable: { type: Boolean },
    type: { type: String },
  };

  constructor() {
    super();
    this.disable = false;
    this.type = 'button';
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent('click-event', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`<style>
        ${s}
      </style>

      <button
        type=${this.type}
        class="common-button"
        ?disabled="${this.disable}"
        @click="${this.handleClick}"
      >
        ${this.title}
      </button> `;
  }
}

customElements.define('auth-button', AuthButton);
