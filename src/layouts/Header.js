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
    header {
      width: 100%;
      background-color: var(--background);

      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 0.5rem;
      padding-bottom: 1.5rem;

      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 10;

      & ul {
        align-items: center;

        list-style: none;
        padding: 0;
        margin: 0;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 25px;
      }

      & li {
        list-style: none;

        text-align: center;
        white-space: nowrap;
      }

      & a {
        display: block;
        text-decoration: none;
        color: inherit;

        & img {
          width: 1.25rem;
          height: 1.25rem;
          margin-bottom: 0;
        }

        & p {
          margin: 0;
          font-size: var(--paragraph---small);
        }
      }
    }
  `;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/components/Header.css';

    console.log(link);

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
                alt=""
                src="${this.checked === 0 ? `${fullHome}` : `${home}`}"
              />
              <p>홈</p>
              <p>${this.home}</p>
            </a>
          </li>
          <li @click=${() => this.toggleClass(1)}>
            <a href="/src/pages/Board/index.html?checked=${this.checked}">
              <img
                alt=""
                src="${this.checked === 1 ? `${fullBoard}` : `${board}`}"
              />
              <p>게시판</p>
            </a>
          </li>
          <li @click=${() => this.toggleClass(2)}>
            <a
              href="/src/pages/main/Exchange/index.html?checked=${this.checked}"
            >
              <img
                alt=""
                src="${this.checked === 2 ? `${fullMap}` : `${map}`}"
              />
              <p>내 근처</p>
            </a>
          </li>
          <li @click=${() => this.toggleClass(3)}>
            <a target="_blank" rel="noreferrer noopener">
              <img
                alt=""
                src="${this.checked == 3 ? `${fullChat}` : `${chat}`}"
              />
              <p>채팅</p>
            </a>
          </li>
          <li @click=${() => this.toggleClass(4)}>
            <a target="_blank" rel="noreferrer noopener">
              <img
                alt=""
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

customElements.define('header-component', Header);
