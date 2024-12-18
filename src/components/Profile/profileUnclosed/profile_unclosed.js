import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './profile-unclosed.css?inline';

class ProfileUnclosed extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    selected: { type: String },
  };

  constructor() {
    super();
    this.selected = 'private';
  }

  toggle(option) {
    this.selected = option;
  }

  render() {
    return html`
      <div class="toggle-group">
        <!-- 이동 가능한 배경 -->
        <div
          class="toggle-background"
          style="transform: ${this.selected === 'private'
            ? 'translateX(0)'
            : 'translateX(148px)'}"
        ></div>

        <!-- 비공개 버튼 -->
        <div
          class="toggle-button ${this.selected === 'private' ? 'active' : ''}"
          @click="${() => this.toggle('private')}"
        >
          ${this.selected === 'private'
            ? html`<span class="icon">
                <img
                  src="/src/assets/password.svg"
                  alt="비공개 아이콘"
                  width="16"
                  height="16"
                />
              </span>`
            : ''}
          비공개
        </div>

        <!-- 전체 공개 버튼 -->
        <div
          class="toggle-button ${this.selected === 'public' ? 'active' : ''}"
          @click="${() => this.toggle('public')}"
        >
          ${this.selected === 'public'
            ? html`<span class="icon">
                <img
                  src="/src/assets/people.svg"
                  alt="전체 공개 아이콘"
                  width="16"
                  height="16"
                />
              </span>`
            : ''}
          전체 공개
        </div>
      </div>
    `;
  }
}

customElements.define('profile-unclosed', ProfileUnclosed);
