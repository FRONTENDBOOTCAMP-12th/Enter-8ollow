import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './profile-photo.css?inline'; //

class ProfileHeader extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <div class="profile-header">
        <!-- 프로필 이미지 -->
        <div class="profile-image-container">
          <img
            src="/src/assets/test/test2.png"
            alt="Profile Image"
            class="profile-image"
          />
          <div class="edit-icon">✏️</div>
        </div>

        <!-- 사용자 정보 -->
        <div class="user-info">EUID*** <span class="user-level">4기</span></div>
        <div class="user-stats">답변 35</div>

        <!-- 아이콘 섹션 -->
        <div class="icon-section">
          <div class="icon">
            <img src="/src/assets/profile/Q&A.svg" alt="나의 Q&A 아이콘" />
            <span>나의 Q&A</span>
          </div>
          <div class="icon">
            <img
              src="/src/assets/profile/profile.svg"
              alt="나의 프로필 아이콘"
            />
            <span>나의 프로필</span>
          </div>
          <div class="icon">
            <img src="/src/assets/profile/alramBell.svg" alt="내소식 아이콘" />
            <span>내소식</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('profile-header', ProfileHeader);
