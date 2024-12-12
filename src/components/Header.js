import { LitElement, html } from 'lit';

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
      <header>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="홈" src="../assets/common/fullHome.svg" />
              <p>홈</p>
              <p>${this.home}</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="게시판" src="../assets/common/life.svg" />
              <p>게시판</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="내 근처" src="../assets/common/map.svg" />
              <p>내 근처</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="채팅" src="../assets/common/chat.svg" />
              <p>채팅</p>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <img alt="내 근처" src="../assets/common/my.svg" />
              <p>나의 이듬</p>
            </a>
          </li>
        </ul>
      </header>
    `;
  }
}

customElements.define('base-header', BaseHeader);
