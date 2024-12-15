import { LitElement, html } from 'lit';
import s from '/src/components/common/CommonButton/CommonButton.css?inline';

class CommonButton extends LitElement {
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
    // console.log('render', this.disable);

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

customElements.define('common-button', CommonButton);
