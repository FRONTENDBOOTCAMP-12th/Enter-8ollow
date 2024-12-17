import { LitElement, html } from 'lit';
import s from '/src/components/Board/BoardField/BoardField.css?inline';

class BoardField extends LitElement {
  static properties = {
    location: { type: String },
    title: { type: String },
  };

  constructor() {
    super();
    this.text = '같이해요';
    this.title = 'text...';
    this.location = 'text';
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="board-field">
        <div class="content">
          <with-us text="같이해요"></with-us>
          <h2 class="title">${this.title}</h2>
          <board-info-items></board-info-items>
          <span class="meet-location">${this.location}</span>
        </div>
        <board-person text="1/3"></board-person>
      </div>
    `;
  }
}

customElements.define('board-field', BoardField);
