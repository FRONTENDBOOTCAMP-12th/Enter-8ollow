import { LitElement, html } from 'lit';
import s from '/src/components/Main/StoryField/StoryField.css?inline';

export class StoryField extends LitElement {
  static properties = {
    image: { type: String },
    title: { type: String },
    content: { type: String },
    author: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
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
