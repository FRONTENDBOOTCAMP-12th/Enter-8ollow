import { LitElement, html } from 'lit';
import { styles } from '/src/components/Main/StoryField/StoryFieldCSS?inline';

export class StoryField extends LitElement {
  static properties = {
    image: { type: String },
    title: { type: String },
    content: { type: String },
    author: { type: String },
  };

  static styles = styles;

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
