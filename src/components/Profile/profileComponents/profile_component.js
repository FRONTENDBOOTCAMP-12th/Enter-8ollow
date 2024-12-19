import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './profile_compmnents.css?inline';

class ProfileContents extends LitElement {
  // 속성 정의
  static properties = {
    text: { type: String }, // 텍스트 내용
    link: { type: String }, // 클릭 시 이동할 URL
  };

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  constructor() {
    super();
    this.text = '기본 텍스트'; // 기본 값 설정
    this.link = '#'; // 기본 링크 설정
  }

  render() {
    return html`
      <div class="profile-contents" @click=${this.handleClick}>
        <div class="profile-text">${this.text}</div>
        <div class="profile-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="var(--contents--content-primary)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    `;
  }

  // 클릭 이벤트에서 링크로 이동
  handleClick() {
    window.location.href = this.link;
  }
}

customElements.define('profile-contents', ProfileContents);
