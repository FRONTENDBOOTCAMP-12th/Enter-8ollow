import { LitElement, html } from 'lit';
import s from '/src/components/Board/BoardPerson/BoardPerson.css?inline';
import imgUrl from '/src/assets/board/people.svg';

class BoardPerson extends LitElement {
  static properties = {
    text: { type: String },
  };
  constructor() {
    super();
    this.text = 'text';
  }

  render() {
    return html`
      <style>
        ${s}
      </style>

      <div class="person-count">
        <img alt="빈 사람 이미지" src=${imgUrl} />
        <span>${this.text}</span>
      </div>
    `;
  }
}

customElements.define('board-person', BoardPerson);
