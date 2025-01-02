import { LitElement, html, css } from 'lit';

class ProfileContents extends LitElement {
  // 속성 정의
  static properties = {
    text: { type: String }, // 텍스트 내용
    link: { type: String }, // 클릭 시 이동할 URL
  };

  static styles = css`
    :host {
      display: flex; /* 프로필 페이지 구성상 flex 방식으로 설정 */
      justify-content: center;
      align-items: center; /* 위치는 임의로 중앙으로 조정 */
      height: 60px;
      box-sizing: border-box; /* 박스 크기 계산 시 패딩과 테두리 포함 */
    }

    .ProfileContents {
      width: 100%; /* 화면 사이즈에 따라 크기 조정 */
      height: 21px;
      padding: 20px; /* 상하좌우 여백을 모두 20px로 설정 */
      background: var(--background);
      border: 0.1px solid var(--contents--content-secondary); /* 전체 테두리 적용 */
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      cursor: pointer; /* 마우스 오버 시 포인터 표시 */
    }

    .ProfileText {
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

    .ProfileIcon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  constructor() {
    super();
    this.text = '기본 텍스트'; // 기본 값 설정
    this.link = '#'; // 기본 링크 설정
  }

  render() {
    return html`
      <div class="ProfileContents" @click=${this.handleClick} tabindex="0">
        <div class="ProfileText">${this.text}</div>
        <div class="ProfileIcon">
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

customElements.define('profile-link', ProfileContents);
