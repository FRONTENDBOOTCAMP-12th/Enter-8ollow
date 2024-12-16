import { LitElement, html } from 'lit';

class WithUs extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = 'text';
  }

  render() {
    return html` <div class="withUs">${this.text}</div> `;
  }
}

customElements.define('with-us', WithUs);

export default WithUs;
