import { LitElement, html } from 'lit';
import s from '/src/components/withUs/withUs.css?inline';

class WithUs extends LitElement {
  static properties = {
    text: { type: String },
  };
  constructor() {
    super();
    this.text = 'text';
  }

  render() {
    return html`
      <style>
        ${s}
      </style>

      <div class="withUs">${this.text}</div>
    `;
  }
}

customElements.define('with-us', WithUs);
