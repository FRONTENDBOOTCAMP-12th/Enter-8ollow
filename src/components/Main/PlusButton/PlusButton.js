import { LitElement, html } from 'lit';
import reset from '/src/style/reset.js';
import ListItemCSS from '/src/components/Main/PlusButton/PlusButtonCSS';

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

  handleKeyPress(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.handleClick();
    }
  }

  static get styles() {
    return [reset, ListItemCSS];
  }

  render() {
    return html`
      <!-- 버튼 -->
      <button
        class="plus-button"
        type="button"
        aria-pressed="${this.active}"
        aria-label="${this.active ? '활성화' : '비활성화'}"
        @click="${this.handleClick}"
        tabindex="0"
      >
        +
      </button>

      <!-- 리스트 -->
      <ul class="exchange-button-list ${this.active ? 'visible' : ''}">
        <li>
          <a
            href="/"
            class="exchange-button"
            role="button"
            tabindex="0"
            @keydown="${this.handleKeyPress}"
          >
            <span>🎧 헤드셋</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            class="exchange-button"
            role="button"
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
            href="/"
            class="exchange-button"
            role="button"
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
