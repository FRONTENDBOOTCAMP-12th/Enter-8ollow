import { LitElement, html } from 'lit';
import s from '/src/components/Main/PlusButton/PlusButton.css?inline';

export class PlusButton extends LitElement {
  static properties = {
    active: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.active = false;
  }

  handleClick() {
    this.active = !this.active;
    this.requestUpdate();
  }

  handleKeyPress(event) {
    // Enter 또는 Space 키를 누르면 클릭 이벤트와 동일하게 동작
    if (event.key === 'Enter' || event.key === ' ') {
      this.handleClick();
    }
  }

  render() {
    return html`
      <style>
        ${s} .exchange-button-list {
          display: none;
        }
        .exchange-button-list.visible {
          display: block;
        }
      </style>
      <!-- 버튼 -->
      <button
        class="plus-button"
        type="button"
        aria-pressed="${this.active}"
        aria-label="${this.active ? '활성화' : '비활성화'}"
        @click="${this.handleClick}"
        @keydown="${this.handleKeyPress}"
        tabindex="0"
      >
        +
      </button>

      <!-- 리스트 -->
      <ul class="exchange-button-list ${this.active ? 'visible' : ''}">
        <li>
          <a
            role="button"
            href="/"
            class="exchange-button"
            tabindex="0"
            @keydown="${this.handleKeyPress}"
          >
            <span>🎧 헤드셋</span>
          </a>
        </li>
        <li>
          <a
            role="button"
            href="/"
            class="exchange-button"
            tabindex="0"
            @keydown="${this.handleKeyPress}"
          >
            <span>⌨️ 키보드</span>
          </a>
        </li>
        <li>
          <a
            role="button"
            href="/"
            class="exchange-button"
            tabindex="0"
            @keydown="${this.handleKeyPress}"
          >
            <span>🖱️ 마우스</span>
          </a>
        </li>
        <li>
          <a
            role="button"
            href="/"
            class="exchange-button"
            tabindex="0"
            @keydown="${this.handleKeyPress}"
          >
            <span>💻 컴퓨터</span>
          </a>
        </li>
        <li>
          <a
            role="button"
            href="/"
            class="exchange-button"
            tabindex="0"
            @keydown="${this.handleKeyPress}"
          >
            <span>🎈 기타 등등</span>
          </a>
        </li>
      </ul>
    `;
  }
}

customElements.define('plus-button', PlusButton);
