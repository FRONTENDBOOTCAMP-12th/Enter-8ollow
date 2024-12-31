import { LitElement, html, css } from 'lit';

export class BoardField extends LitElement {
  static properties = {
    text: { type: String },
    location: { type: String },
    title: { type: String },
    personCount: { type: String },
    gender: { type: String },
    meetDay: { type: String },
    imgLink: { type: String },
    description: { type: String },
    time: { type: String },
    viewCount: { type: Number },
  };

  static styles = css`
    .board-field {
      background-color: var(--white);
      padding: 0.75rem;

      display: grid;
      grid-template-columns: 1fr auto;
      position: relative; /* 'position' 속성 설정 */
      z-index: 1;
    }
    .content {
      display: flex;
      flex-direction: column; /* 세로로 정렬 */
    }
    .board-field > board-person {
      align-self: flex-start;

      padding-top: 4.375rem;
      padding-right: 0.625rem;
    }

    h2 {
      margin: 0;

      font-size: var(--paragraph---medium);
      line-height: 180%;
      font-weight: 500;
    }

    span {
      line-height: 180%;
      color: var(--contents--content-tertiary);
      font-size: var(--paragraph---small);
    }

    img {
      width: 3.75rem;
      height: 3.75rem;

      padding-top: 0;
      border-radius: 4px;
    }
  `;

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
    this.description = '어쩌고 저쩌고...';
    this.time = '4분전';
    this.viewCount = 4;
  }

  render() {
    return html`
      <div class="board-field">
        <div class="content">
          <with-us text=${this.text}></with-us>
          <h2 class="title">${this.title}</h2>
          ${this.text === '같이해요'
            ? html`<board-info-items
                  gender=${this.gender}
                  meetDay=${this.meetDay}
                ></board-info-items>
                <span class="meet-location"
                  >${this.location}·${this.time}·조회 ${this.viewCount}</span
                >`
            : html`<span>${this.description}</span>
                <span class="meet-location"
                  >${this.location}·${this.time}·조회 ${this.viewCount}</span
                >`}
        </div>
        ${this.text === '같이해요'
          ? html` <board-person text="${this.personCount}"></board-person>`
          : html`<img src="${this.imgLink}" alt="" />`}
      </div>
    `;
  }
}

customElements.define('board-field', BoardField);
