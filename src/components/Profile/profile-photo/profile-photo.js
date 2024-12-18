import { LitElement, html, css } from 'lit';

export class ProfileHeader extends LitElement {
  static styles = css`
    /* 전체 컨테이너 */
    .profile-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 1.5rem auto;
      font-family: Arial, sans-serif;
      max-width: 400px; /* 최대 너비 설정 */
      padding: 0 1rem; /* 양쪽 여백 */
    }

    /* 프로필 이미지 */
    .profile-image-container {
      position: relative;
      width: 80px;
      height: 80px;
      margin-bottom: 0.5rem;
    }

    .profile-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    /* 수정 아이콘 */
    .edit-icon {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-size: 12px;
    }

    /* 사용자 정보 */
    .user-info {
      font-size: 1.2rem;
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    .user-level {
      font-size: 0.8rem;
      color: #5865f2; /* 블루 색상 */
      margin-left: 5px;
      border: 1px solid #5865f2;
      border-radius: 12px;
      padding: 2px 6px;
    }

    .user-stats {
      font-size: 0.9rem;
      color: #777;
      margin-bottom: 1rem;
    }

    /* 아이콘 섹션 */
    .icon-section {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 1rem;
    }

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.9rem;
      color: #333;
    }

    .icon svg {
      width: 24px;
      height: 24px;
      margin-bottom: 5px;
    }
  `;

  render() {
    return html`
      <div class="profile-header">
        <!-- 프로필 이미지 -->
        <div class="profile-image-container">
          <img
            src="/src/assets/test/test.jpeg"
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
            <svg viewBox="0 0 24 24">
              <path
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
              ></path>
            </svg>
            <span>나의 Q&A</span>
          </div>
          <div class="icon">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              ></path>
            </svg>
            <span>나의 프로필</span>
          </div>
          <div class="icon">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-2.97-2.16-5.43-5-5.92V4c0-.55-.45-1-1-1s-1 .45-1 1v1.08c-2.84.49-5 2.95-5 5.92v5l-2 2v1h16v-1l-2-2z"
              ></path>
            </svg>
            <span>내소식</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('profile-header', ProfileHeader);
