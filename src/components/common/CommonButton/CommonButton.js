import { LitElement, html } from 'lit';
import s from '/src/components/common/CommonButton/CommonButton.css?inline';

class CommonButton extends LitElement {
  static properties = {
    title: { type: String },
  };

  constructor() {
    super();
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

      <button type="button" class="common-button" @click="${this.handleClick}">
        ${this.title}
      </button> `;
  }
}

customElements.define('common-button', CommonButton);
