import { LitElement, html, css, unsafeCSS } from 'lit';

class CommonCartegory extends LitElement {
  static properties = {
    title: { type: String },
    detail: { type: String },
  };

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .category {
      label {
        position: relative;
        cursor: pointer;
        /* width: 400px; */
      }

      .checkbox {
        position: absolute;
        width: 143px;
        height: 80px;
        z-index: 999;
        opacity: 0;
      }

      .content {
        display: flex;
        background-color: #a7a7a7;
        padding: 12px;
        border-radius: 8px;
        position: absolute;
        color: black;
        white-space: nowrap;
        width: 143px;
        pointer-events: none;
      }

      .title {
        font-size: var(--label---small);
        color: white;
        margin-bottom: 8px;
        margin-block-end: 8px;
      }

      .detail {
        font-size: var(--label---large);
      }

      .container {
        position: relative;
        display: flex;
        flex-direction: column;
      }

      .check-icon {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--contents--content-secondary);
        background-image: url('/public/plus.svg');
        background-size: contain;
        align-self: center;
        right: 12px;
      }

      [type='checkbox']:checked + .content {
        background-color: #373f67;
        color: white;
      }

      [type='checkbox']:checked + .content .check-icon {
        background-color: white;
        background-image: url('/public/check.svg');
      }

      [type='checkbox']:focus + .content {
        box-shadow: 1px 1px 4px 1px #929292;
      }
    }
  `;
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="category">
        <label class="card" for="check-cartegory">
          <input type="checkbox" class="checkbox" id="check-cartegory" />
          <div class="content" aria-hidden>
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
