import { LitElement, html, css } from 'lit';

export class StoryField extends LitElement {
  static properties = {
    image: { type: String },
    title: { type: String },
    content: { type: String },
    author: { type: String },
  };

  static styles = css`
    .story-field {
      display: inline-block;
      margin: 10px;
      font-size: var(--paragraph---small);

      img {
        background-color: var(--contents--content-secondary);
        width: 100%;
        height: 6.25rem;
        border-radius: 8px;
        object-fit: cover;
      }

      .text {
        margin-top: 0.75rem;
        margin-block-start: 0.75rem;
        margin-bottom: 0.25rem;
        margin-block-end: 0.25rem;
      }

      .acthor {
        color: var(--contents--content-secondary);
      }
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="story-field">
        <img src="${this.image}" alt="" />

        <div class="text-field">
          <p class="text">${this.title}</p>
          <p class="acthor">${this.author}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('story-field', StoryField);
