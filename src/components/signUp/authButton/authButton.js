import { LitElement, html } from 'lit';

import { styles } from '/src/components/signUp/AuthButton/AuthButtonCSS?inline';

class AuthButton extends LitElement {
  static properties = {
    title: { type: String },
    disable: { type: Boolean },
    type: { type: String },
  };

  static styles = [styles];

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
    return html`
      <button
        type=${this.type}
        class="common-button"
        ?disabled="${this.disable}"
        @click="${this.handleClick}"
      >
        ${this.title}
      </button>
    `;
  }
}

customElements.define('auth-button', AuthButton);
