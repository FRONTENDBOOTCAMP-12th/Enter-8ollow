import { LitElement, html } from 'lit';
import s from '/src/components/common/Header/Header.css?inline';

import fullHome from '/src/assets/fullHome.svg';
import board from '/src/assets/board.svg';
import map from '/src/assets/map.svg';
import chat from '/src/assets/chat.svg';
import profile from '/src/assets/profile.svg';

class BaseHeader extends LitElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/components/Header.css';

    shadowRoot.appendChild(link);
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <header>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="홈" src="${fullHome}" />
              <p>홈</p>
              <p>${this.home}</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="게시판" src="${board}" />
              <p>게시판</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="내 근처" src="${map}" />
              <p>내 근처</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="채팅" src="${chat}" />
              <p>채팅</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="내 근처" src="${profile}" />
              <p>나의 이듬</p>
            </a>
          </li>
        </ul>
      </header>
    `;
  }
}

customElements.define('base-header', BaseHeader);
