import { LitElement, html } from 'lit';
import s from '/src/pages/board/board.css?inline';

class Board extends LitElement {
  constructor() {
    super();
    this.description = '';
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="main-button-container">
        <main-button name="주제"></main-button>
        <main-button name="인기글"></main-button>
        <main-button name="같이해요"></main-button>
        <main-button name="질의응답"> </main-button>
        <main-button name="자유게시판"></main-button>
      </div>

      <ul class="board-field-container">
        <li>
          <board-field
            text="같이해요"
            title="youtube 클론 프젝 같이 하실 분~!"
            location="응암제 3동"
            personCount="1/3"
            gender="${this.description}"
            meetDay="오늘"
          ></board-field>
        </li>
        <li><board-field text="질의응답"></board-field></li>
        <li><board-field text="질의응답"></board-field></li>
        <li><board-field text="질의응답"></board-field></li>
        <li><board-field text="같이해요"></board-field></li>
        <li><board-field text="자유게시판"></board-field></li>
      </ul>
      <region-menu></region-menu>
      <base-header></base-header>
    `;
  }
}

customElements.define('board-page', Board);
