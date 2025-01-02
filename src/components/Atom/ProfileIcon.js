import { LitElement, html, css } from 'lit';

// 이미지 import
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

customElements.define('profile-icon', ProfileHeader);
