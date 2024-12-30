import { LitElement, html, css } from 'lit';

class AuthButton extends LitElement {
  static properties = {
    title: { type: String },
    disable: { type: Boolean },
    type: { type: String },
  };

  static styles = css`
    button {
      width: 100%;
      background-color: transparent;
      border: 1px solid var(--contents--content-secondary);
      padding-top: 8px;
      padding-bottom: 8px;
      padding-block: 8px;
      font-size: var(--label---medium);
      color: var(--contents--content-primary);
      border-radius: 4px;
    }

    button[disabled] {
      color: var(--contents--content-secondary);
      cursor: not-allowed;
    }
  `;

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
