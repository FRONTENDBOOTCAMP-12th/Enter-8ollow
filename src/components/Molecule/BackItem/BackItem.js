import { LitElement, html, css } from 'lit';
import back from '/src/assets/common/back/direction=left.png';
import home from '/src/assets/home.svg';
import share from '/src/assets/share.svg';
import more from '/src/assets/more.svg';
class BackItem extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }
    .back-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      height: 50px;
    }
    .icon {
      cursor: pointer;
      width: 20px;
      height: 20px;
      background: none;
      border: none;
      padding: 0;
    }
    .left-section,
    .right-section {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  `;
  render() {
    return html`
      <nav class="back-item">
        <section class="left-section">
          <button
            type="button"
            class="icon"
            aria-label="뒤로가기"
            @click="${this.handleBackClick}"
          >
            <img src="${back}" alt="뒤로가기" />
          </button>
          <a href="" class="icon" aria-label="홈으로 이동">
            <img src="${home}" alt="기기거래" />
          </a>
        </section>
        <section class="right-section">
          <button
            type="button"
            class="icon"
            aria-label="공유하기"
            @click="${this.handleShareClick}"
          >
            <img src="${share}" alt="공유하기" />
          </button>
          <button
            type="button"
            class="icon"
            aria-label="더보기"
            @click="${this.handleMoreClick}"
          >
            <img src="${more}" alt="더보기" />
          </button>
        </section>
      </nav>
    `;
  }
  handleBackClick() {
    // console.log('뒤로가기 클릭');
    window.history.back();
  }
  handleHomeClick() {
    // console.log('홈 클릭');
    window.location.href = '/';
  }
  handleShareClick() {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert('링크가 복사되었습니다🍀');
        console.log('공유 링크 복사 성공:', currentUrl);
      })
      .catch((err) => {
        alert('링크 복사에 실패했습니다. 다시 시도해주세요.');
        console.error('공유 링크 복사 실패:', err);
      });
  }
  handleMoreClick() {
    alert('더보기 메뉴 준비 중입니다🥹');
  }
}
customElements.define('back-item', BackItem);