import { LitElement, html, css } from 'lit';

class ProfileHeader extends LitElement {
  static styles = css`
    /* 전체 컨테이너 */
    .ProfileHeader {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 1.5rem auto;
      font-family: Arial, sans-serif;
      max-width: 400px;
      padding: 0 1rem;
    }

    /* 프로필 이미지 */
    .ProfileImageContainer {
      position: relative;
      width: 80px;
      height: 80px;
      margin-bottom: 0.5rem;
    }

    .ProfileImage {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius---large);
      object-fit: cover;
    }

    /* 수정 아이콘 */
    .EditIcon {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 20px;
      height: 20px;
      background-color: var(--white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-size: 12px;
    }

    /* 사용자 정보 */
    .UserInfo {
      font-size: var(--heading---medium);
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    .UserLevel {
      font-size: var(--label---small);
      color: var(--secondary);
      margin-left: 5px;
      border: 1px solid var(--secondary);
      border-radius: 12px;
      padding: 2px 6px;
    }

    .UserStats {
      font-size: var(--paragraph---medium);
      color: var(--contents--content-secondary);
      margin-bottom: 1rem;
    }

    /* 아이콘 섹션 */
    .IconSection {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 1rem;
    }

    .Icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: var(--label---medium);
      color: var(--contents--content-primary);
    }

    .Icon svg {
      width: 50px;
      height: 50px;
      margin-bottom: 5px;
    }
  `;

  render() {
    return html`
      <div class="ProfileHeader">
        <!-- 프로필 이미지 -->
        <div class="ProfileImageContainer">
          <img
            src="/src/assets/MainSwiper.png"
            alt="Profile Image"
            class="ProfileImage"
          />
          <div class="EditIcon">✏️</div>
        </div>

        <!-- 사용자 정보 -->
        <div class="UserInfo">EUID*** <span class="UserLevel">4기</span></div>
        <div class="UserStats">답변 35</div>

        <!-- 아이콘 섹션 -->
        <div class="IconSection">
          <div class="Icon">
            <img src="/src/assets/profile/Q&A.svg" alt="나의 Q&A 아이콘" />
            <span>나의 Q&A</span>
          </div>
          <div class="Icon">
            <img
              src="/src/assets/profile/profile.svg"
              alt="나의 프로필 아이콘"
            />
            <span>나의 프로필</span>
          </div>
          <div class="Icon">
            <img src="/src/assets/profile/alramBell.svg" alt="내소식 아이콘" />
            <span>내소식</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('profile-photo', ProfileHeader);
