import { LitElement, html, css } from 'lit';

// 이미지 import
import profileImage from '/src/assets/MainSwiper.png';
import qnaIcon from '/src/assets/profile/Q&A.svg';
import profileIcon from '/src/assets/profile/profile.svg';
import bellIcon from '/src/assets/profile/alramBell.svg';

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
      cursor: pointer;
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
      color: #1a73e8; /* 대비를 높인 파란색 */
      margin-left: 5px;
      border: 1px solid #1a73e8;
      border-radius: 12px;
      padding: 2px 6px;
      background-color: #ffffff;
    }

    .UserStats {
      font-size: var(--paragraph---medium);
      color: #333333; /* 대비를 높인 어두운 회색 */
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
      cursor: pointer;
    }

    .Icon img {
      cursor: pointer;
    }
  `;

  navigateToProfile() {
    window.location.href = '/src/pages/ProfileDetail/index.html'; // 이동할 HTML 페이지 경로
  }

  navigateToQandA() {
    window.location.href = '/src/pages/qna/index.html'; // 나의 Q&A 페이지 경로
  }

  render() {
    return html`
      <div class="ProfileHeader">
        <!-- 프로필 이미지 -->
        <div class="ProfileImageContainer">
          <img
            src="${profileImage}"
            alt="사용자의 프로필 사진"
            class="ProfileImage"
          />
          <div
            class="EditIcon"
            role="button"
            tabindex="0"
            aria-label="프로필 이미지 수정"
          >
            ✏️
          </div>
        </div>

        <!-- 사용자 정보 -->
        <div class="UserInfo">EUID*** <span class="UserLevel">4기</span></div>
        <div class="UserStats">답변 35</div>

        <!-- 아이콘 섹션 -->
        <div class="IconSection">
          <div
            class="Icon"
            tabindex="0"
            role="button"
            aria-label="Q&A 페이지로 이동"
            @click=${this.navigateToQandA}
          >
            <img src="${qnaIcon}" alt="Q&A 보기" />
            <span>나의 Q&A</span>
          </div>
          <div
            class="Icon"
            tabindex="0"
            role="button"
            aria-label="프로필 페이지로 이동"
            @click=${this.navigateToProfile}
          >
            <img src="${profileIcon}" alt="프로필 보기" />
            <span>나의 프로필</span>
          </div>
          <div
            class="Icon"
            tabindex="0"
            role="button"
            aria-label="알림 확인하기"
          >
            <img src="${bellIcon}" alt="알림 보기" />
            <span>내소식</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('profile-photo', ProfileHeader);
