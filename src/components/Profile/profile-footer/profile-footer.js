import { LitElement, html, css } from 'lit';

export class ProfileFooter extends LitElement {
  static styles = css`
    /* 전체 컨테이너 스타일 */
    .footer-container {
      display: flex;
      flex-direction: column;
      gap: 1rem; /* 메뉴 사이 여백 */
      padding: 1rem;
      max-width: 400px; /* 최대 너비 설정 */
      margin: 0 auto; /* 가운데 정렬 */
      font-family: Arial, sans-serif;
      font-size: 0.95rem;
      color: #333;
    }

    /* 개별 메뉴 스타일 */
    .menu-item {
      cursor: pointer;
      transition: color 0.2s ease;
      text-align: left; /* 글자를 왼쪽 정렬 */
    }

    .menu-item:hover {
      color: #0078ff;
    }

    /* 로그아웃 링크 스타일 */
    .logout {
      color: #5865f2; /* 블루 색상 */
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
      margin-top: 1rem;
      text-align: left; /* 글자를 왼쪽 정렬 */
      display: block;
    }

    .logout:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <div class="footer-container">
        <div class="menu-item">보관 질문</div>
        <div class="menu-item">설정</div>
        <div class="menu-item">지식 iN 공식 블로그</div>
        <div class="menu-item">서비스 정보</div>
        <div class="menu-item">공지사항</div>
        <a class="logout" href="#">로그아웃</a>
      </div>
    `;
  }
}

customElements.define('profile-footer', ProfileFooter);
