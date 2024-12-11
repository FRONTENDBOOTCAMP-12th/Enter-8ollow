import { LitElement, html, css } from 'lit';

class ProfileContents extends LitElement {
  static styles = css`
    :host {
      display: flex; /*프로필 페이지 구성상 flex 방식으로 설정했음  */
      justify-content: center;
      align-items: center;
      height: 100vh; /* 위치는 임의로 중앙으로 조정 */
      box-sizing: border-box; /* 박스 크기 계산 시 패딩과 테두리 포함 */
    }

    .profile-contents {
      width: 248px; /화면 사이즈에 따라 크기 조정/
      height: 21px;
      padding: 16px; /* 상하좌우 여백을 모두 16px로 설정 */
      background: var(--background);
      border: 1px solid var(--contents--content-secondary); /* 전체 테두리 적용,(이후 수정) */
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      cursor: pointer; /* 마우스 오버 시 포인터 표시 */
    }
    .profile-text {
      font-family: Pretendard, sans-serif; /* Pretendard 폰트 사용 */
      font-size: 14px; 
      font-weight: 600; 
      color: var(
        --contents--content-primary
      ); /* 텍스트 색상에 전역 변수 사용 */
      white-space: nowrap; /* 텍스트 줄바꿈 방지 */
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
