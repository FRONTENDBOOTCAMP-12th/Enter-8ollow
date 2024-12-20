import { LitElement, html } from 'lit';

class BoardTheme extends LitElement {
  static properties = {
    imgLink: { type: String },
    imgAlt: { type: String },
    text: { type: String },
  };

  constructor() {
    super();
    this.text = 'text';
    this.imgLink = '';
    this.imgAlt = '샘플 이미지';
  }

  render() {
    return html` <style>
        .theme {
          width: 2.125rem;
          height: 2.125rem;
          border-radius: 6px;
          background-color: gray;
        }

        .theme,
        p {
          display: inline-block;
          vertical-align: middle;
        }
        p {
          margin: 0;
          color: var(--white);
          font-size: var(--paragraph---medium);
        }
      </style>

      <!-- <img src="${this.imgLink}" alt="${this.imgAlt}" /> -->
      <div class="theme"></div>
      <p>${this.text}</p>`;
  }
}

customElements.define('board-theme', BoardTheme);
