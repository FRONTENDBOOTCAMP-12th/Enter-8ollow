import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './profile_compmnents.css?inline'; //

class ProfileContents extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <!-- 프로필 컴포넌트 -->
      <div class="profile-contents" @click=${this.handleClick}>
        <!-- 텍스트 영역 -->
        <div class="profile-text">text</div>

        <!-- 아이콘 영역 -->
        <div class="profile-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="var(--contents--content-primary)" /* 아이콘 색상 전역 변수 사용 */
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    `;
  }

  // 클릭 시 URL 이동 처리
  handleClick() {
    window.location.href = 'https://example.com';
  }
}

customElements.define('profile-contents', ProfileContents);
