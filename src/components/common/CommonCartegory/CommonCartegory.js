import { LitElement, html } from 'lit';
import s from '/src/components/common/CommonCartegory/CommonCartegory.css?inline';

class CommonCartegory extends LitElement {
  static properties = {
    title: { type: String },
    detail: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="category">
        <label class="card" for="check-cartegory">
          <input
            type="checkbox"
            class="checkbox sr-only"
            id="check-cartegory"
          />
          <div class="content">
            <div class="container">
              <span class="title">${this.title}</span>
              <span class="detail">${this.detail}</span>
            </div>
            <span class="check-icon"></span>
          </div>
        </label>
      </div>
    `;
  }
}

customElements.define('common-cartegory', CommonCartegory);
