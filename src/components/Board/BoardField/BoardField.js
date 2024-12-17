import { LitElement, html } from 'lit';
import s from '/src/components/Board/BoardField/BoardField.css?inline';

class BoardField extends LitElement {
  static properties = {
    text: { type: String },
    location: { type: String },
    title: { type: String },
    personCount: { type: String },
    gender: { type: String },
    meetDay: { type: String },
    imgLink: { type: String },
  };

  constructor() {
    super();
    this.text = '같이해요';
    this.title = 'text...';
    this.location = 'text';
    this.personCount = '';
    this.gender = '';
    this.meetDay = '';
    this.classType = 'freeForm';
    this.imgLink = '/src/assets/board/example.png';
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="board-field">
        <div class="content">
          <with-us text=${this.text}></with-us>
          <h2 class="title">${this.title}</h2>
          ${this.text === '같이해요'
            ? html`<board-info-items
                  gender=${this.gender}
                  meetDay=${this.meetDay}
                ></board-info-items>
                <span class="meet-location">${this.location}</span>`
            : html`<span>어쩌고저쩌고...</span>
                <span class="meet-location">${this.location}</span>`}
        </div>
        ${this.text === '같이해요'
          ? html` <board-person text="${this.personCount}"></board-person>`
          : html`<img src="${this.imgLink}" />`}
      </div>
    `;
  }
}

customElements.define('board-field', BoardField);
