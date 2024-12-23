import { LitElement, html, css } from 'lit';
import imgUrl from '/src/assets/board/people.svg';

export class BoardPerson extends LitElement {
  static properties = {
    text: { type: String },
  };

  static styles = css`
    .person-count {
      height: 2.1875rem;
      display: flex;
      align-items: center;
    }

    span {
      font-size: var(--paragraph---small);
      color: var(--components--component-person);
      margin-left: 0.125rem;
    }
  `;
  constructor() {
    super();
    this.text = 'text';
  }

  render() {
    return html`
      <div class="person-count">
        <img alt="빈 사람 이미지" src=${imgUrl} />
        <span>${this.text}</span>
      </div>
    `;
  }
}

customElements.define('board-person', BoardPerson);
