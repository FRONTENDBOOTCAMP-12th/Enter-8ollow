import { LitElement, html } from 'lit';
import s from '/src/components/Main/StoryField/StoryField.css?inline';

export class StoryField extends LitElement {
  static properties = {
    image: { type: String },
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
        <img src="/src/assets/MainSwiper.png" alt="" />

        <div class="text-field">
          <p class="text">Story ContentStory</p>
          <p class="acthor">Acthor</p>
        </div>
      </div>
    `;
  }
}

customElements.define('story-field', StoryField);
