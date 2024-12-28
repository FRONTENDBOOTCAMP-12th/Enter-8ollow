import { LitElement, html, css } from 'lit';

class CommonButton extends LitElement {
  static properties = {
    title: { type: String },
    disable: { type: Boolean },
    type: { type: String },
  };

  static styles = css`
    .common-button {
      display: inline-block;
      background-color: var(--primary);
      color: var(--white);
      text-align: center;
      min-width: 254px;
      width: 100%;
      border: none;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-block: 8px;
      border-radius: 8px;
      height: 40px;
      cursor: pointer;
      white-space: nowrap;
    }

    button[disabled] {
      background-color: var(--contents--content-secondary);
      color: var(--background);
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

customElements.define('common-button', CommonButton);
