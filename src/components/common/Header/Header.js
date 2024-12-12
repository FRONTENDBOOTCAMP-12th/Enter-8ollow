import { LitElement, html } from 'lit';
import s from '/src/components/common/Header/Header.css?inline';

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
    console.log(s);
    return html`
      <style>
        ${s}
      </style>
      <header>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="홈" src="/src/assets/home.svg" />
              <p>홈</p>
              <p>${this.home}</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="게시판" src="/src/assets/board.svg" />
              <p>게시판</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="내 근처" src="/src/assets/map.svg" />
              <p>내 근처</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="채팅" src="/src/assets/chat.svg" />
              <p>채팅</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="내 근처" src="/src/assets/profile.svg" />
              <p>나의 이듬</p>
            </a>
          </li>
        </ul>
      </header>
    `;
  }
}

customElements.define('base-header', BaseHeader);
