import { LitElement, html, css } from 'lit';
import pb from '/src/api/pocketbase'; // PocketBase 연결

class ProfileContents extends LitElement {
  static properties = {
    text: { type: String }, // 텍스트 내용
    comments: { type: Array }, // 표시할 댓글 리스트
    isVisible: { type: Boolean }, // 댓글 표시 여부
    svgIcon: { type: String }, // SVG 파일 경로
  };

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      box-sizing: border-box;
    }

    .ProfileContents {
      width: 91.3%; /* 화면 사이즈에 따라 크기 조정 */
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
      font-family: Pretendard, sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: var(--contents--content-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ProfileIcon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .comments-container {
      width: 100%;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* 왼쪽 정렬 */
    }

    .comment-item {
      display: flex;
      align-items: center;
      margin: 5px 0;
    }

    .comment-icon {
      margin-right: 10px; /* 아이콘과 말풍선 간격 */
      width: 24px;
      height: 24px;
    }

    .comment-bubble {
      background: var(--tertiary);
      color: var(--white);
      padding: 10px;
      border-radius: 10px;
      font-size: 14px;
      max-width: fit-content; /* 글자 길이에 따라 너비 조정 */
    }
  `;

  constructor() {
    super();
    this.text = '받은 매너 평가'; // 기본 텍스트
    this.comments = []; // 댓글 리스트
    this.isVisible = false; // 댓글 표시 여부 초기값
    this.svgIcon = '/src/assets/people.svg'; // SVG 파일 경로 기본값
  }

  // 클릭 이벤트로 댓글 표시/숨기기
  async handleClick() {
    if (!this.isVisible) {
      // PocketBase에서 데이터 가져오기
      try {
        const record = await pb.collection('profile').getOne('no4l9i8q06plv7f'); // 사용자 ID에 맞게 변경

        if (Array.isArray(record.manner_comment)) {
          this.comments = record.manner_comment;
        } else {
          console.error('manner_comment는 배열이 아닙니다.');
          this.comments = [];
        }
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    }
    this.isVisible = !this.isVisible; // 표시 여부 토글
  }

  render() {
    return html`
      <div class="ProfileContents" @click=${this.handleClick}>
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

      <!-- 댓글 리스트 -->
      ${this.isVisible
        ? html`
            <div class="comments-container">
              ${this.comments.map(
                (comment) => html`
                  <div class="comment-item">
                    <img
                      class="comment-icon"
                      src="${this.svgIcon}"
                      alt="icon"
                    />
                    <div class="comment-bubble">${comment}</div>
                  </div>
                `
              )}
            </div>
          `
        : ''}
    `;
  }
}

customElements.define('trade-review-component', ProfileContents);
