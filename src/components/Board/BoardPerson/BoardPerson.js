import { LitElement, html } from 'lit';
import s from '/src/components/Board/BoardPerson/BoardPerson.css?inline';

class BoardPerson extends LitElement {
  constructor() {
    super();
    this.text = 'text';
  }

  render() {
    return html`
      <style>
        ${s}
      </style>

      <div class="person">
        <img alt="빈 사람 이미지" src="/src/assets/board/people.svg" />
        <span>${this.text}</span>
      </div>
    `;
  }
}

customElements.define('board-person', BoardPerson);
