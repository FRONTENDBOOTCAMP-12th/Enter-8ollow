import { LitElement, html } from 'lit';
import s from '/src/components/Board/BoardInfoItems/BoardInfoItems.css?inline';

class BoardInfoItems extends LitElement {
  constructor() {
    super();
    this.gender = 'text';
    this.meetDay = 'text';
  }

  static properties = {
    gender: { type: String },
    meetDay: { type: String },
  };

  render() {
    return html`
      <style>
        ${s}
      </style>

      <div class="info-item gender">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>성별 아이콘</title>
          <path
            d="M13.3332 14.1667V15.8333H1.6665V14.1667C1.6665 14.1667 1.6665 10.8333 7.49984 10.8333C13.3332 10.8333 13.3332 14.1667 13.3332 14.1667ZM10.4165 6.24999C10.4165 5.67313 10.2454 5.10922 9.92496 4.62958C9.60447 4.14994 9.14895 3.7761 8.616 3.55534C8.08305 3.33459 7.4966 3.27683 6.93082 3.38937C6.36505 3.50191 5.84535 3.7797 5.43744 4.1876C5.02954 4.5955 4.75175 5.1152 4.63921 5.68098C4.52667 6.24676 4.58443 6.8332 4.80519 7.36615C5.02594 7.8991 5.39978 8.35463 5.87942 8.67511C6.35907 8.9956 6.92298 9.16666 7.49984 9.16666C8.27339 9.16666 9.01525 8.85937 9.56223 8.31239C10.1092 7.76541 10.4165 7.02354 10.4165 6.24999ZM13.2832 10.8333C13.7955 11.2298 14.2146 11.7337 14.5112 12.3096C14.8078 12.8855 14.9746 13.5194 14.9998 14.1667V15.8333H18.3332V14.1667C18.3332 14.1667 18.3332 11.1417 13.2832 10.8333ZM12.4998 3.33333C11.9262 3.33013 11.3653 3.50162 10.8915 3.82499C11.3977 4.53227 11.6699 5.38023 11.6699 6.24999C11.6699 7.11975 11.3977 7.96771 10.8915 8.67499C11.3653 8.99836 11.9262 9.16985 12.4998 9.16666C13.2734 9.16666 14.0153 8.85937 14.5622 8.31239C15.1092 7.76541 15.4165 7.02354 15.4165 6.24999C15.4165 5.47644 15.1092 4.73458 14.5622 4.1876C14.0153 3.64062 13.2734 3.33333 12.4998 3.33333Z"
            fill="var( --components--component-person)"
          />
        </svg>

        <span>text</span>
      </div>

      <div class="info-item meet-day">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>달력 아이콘</title>
          <path
            d="M1.6665 15.8333C1.6665 17.25 2.74984 18.3333 4.1665 18.3333H15.8332C17.2498 18.3333 18.3332 17.25 18.3332 15.8333V9.16666H1.6665V15.8333ZM15.8332 3.33332H14.1665V2.49999C14.1665 1.99999 13.8332 1.66666 13.3332 1.66666C12.8332 1.66666 12.4998 1.99999 12.4998 2.49999V3.33332H7.49984V2.49999C7.49984 1.99999 7.1665 1.66666 6.6665 1.66666C6.1665 1.66666 5.83317 1.99999 5.83317 2.49999V3.33332H4.1665C2.74984 3.33332 1.6665 4.41666 1.6665 5.83332V7.49999H18.3332V5.83332C18.3332 4.41666 17.2498 3.33332 15.8332 3.33332Z"
            fill="var( --components--component-person)"
          />
        </svg>

        <span>text</span>
      </div>
    `;
  }
}

customElements.define('board-info-items', BoardInfoItems);
