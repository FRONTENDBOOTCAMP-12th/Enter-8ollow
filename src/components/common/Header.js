import { LitElement, html, css } from 'lit';

import fullHome from '/src/assets/fullHome.svg';
import home from '/src/assets/home.svg';
import fullBoard from '/src/assets/fullFile.svg';
import board from '/src/assets/board.svg';
import fullMap from '/src/assets/fullMap.svg';
import map from '/src/assets/map.svg';
import fullChat from '/src/assets/fullChat.svg';
import chat from '/src/assets/chat.svg';
import fullProfile from '/src/assets/fullMy.svg';
import profile from '/src/assets/profile.svg';

export class Header extends LitElement {
  static properties = {
    checked: { type: Number },
    index: { type: Number },
    urlChecked: { type: Number },
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
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/components/Header.css';

    shadowRoot.appendChild(link);

    const urlParams = new URLSearchParams(window.location.search);
    this.urlChecked = urlParams.get('checked');
    if (this.urlChecked) {
      this.checked = parseInt(this.urlChecked);
    }
  }

  toggleClass(index) {
    this.checked = index;
    console.log(this.checked);
  }

  render() {
    return html`
      <header>
        <ul>
          <li @click="${() => this.toggleClass(0)}">
            <a href="/src/pages/main/?checked=${this.checked}">
              <img
                alt="홈"
                src="${this.checked === 0 ? `${fullHome}` : `${home}`}"
              />
              <p>홈</p>
              <p>${this.home}</p>
            </a>
          </li>
          <li @click=${() => this.toggleClass(1)}>
            <a href="/src/pages/board/board.html?checked=${this.checked}">
              <img
                alt="게시판"
                src="${this.checked === 1 ? `${fullBoard}` : `${board}`}"
              />
              <p>게시판</p>
            </a>
          </li>
          <li @click=${() => this.toggleClass(2)}>
            <a target="_blank" rel="noreferrer noopener">
              <img
                alt="내 근처"
                src="${this.checked === 2 ? `${fullMap}` : `${map}`}"
              />
              <p>내 근처</p>
            </a>
          </li>
          <li @click=${() => this.toggleClass(3)}>
            <a target="_blank" rel="noreferrer noopener">
              <img
                alt="채팅"
                src="${this.checked == 3 ? `${fullChat}` : `${chat}`}"
              />
              <p>채팅</p>
            </a>
          </li>
          <li @click=${() => this.toggleClass(4)}>
            <a target="_blank" rel="noreferrer noopener">
              <img
                alt="내 근처"
                src="${this.checked === 4 ? `${fullProfile}` : `${profile}`}"
              />
              <p>나의 이듬</p>
            </a>
          </li>
        </ul>
      </header>
    `;
  }
}

customElements.define('header', Header);
