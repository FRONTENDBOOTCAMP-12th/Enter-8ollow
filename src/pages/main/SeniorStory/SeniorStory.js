import { LitElement, html, css } from 'lit';
import styles from '/src/pages/Main/SeniorStory/SeniorStory.css?inline';

import {} from '/src/components/index.js';

class SeniorStory extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
    console.log('SeniorStory');
  }

  render() {
    console.log(styles);
    return html`
      <style>
        ${styles}
      </style>

      <div class="story-container">
        <story-field></story-field>
        <story-field></story-field>
        <story-field></story-field>
        <story-field></story-field>
        <story-field></story-field>
        <story-field></story-field>
        <story-field></story-field>
        <story-field></story-field>
        <story-field></story-field>
      </div>
    `;
  }
}

customElements.define('senior-story', SeniorStory);
