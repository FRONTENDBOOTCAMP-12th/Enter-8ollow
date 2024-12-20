import { LitElement, html } from 'lit';
import s from '/src/components/common/Header/Header.css?inline';

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

class BaseHeader extends LitElement {
  static properties = {
    checked: { type: Number },
    index: { type: Number },
    urlChecked: { type: Number },
  };

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
      <style>
        ${s}
      </style>
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

customElements.define('base-header', BaseHeader);
