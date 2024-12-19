import { LitElement, html } from 'lit';
import s from '/src/components/Board/BoardThemeList/BoardThemeList.css?inline';

class BoardThemeList extends LitElement {
  constructor() {
    super();
  }

  firstUpdated() {
    const customElements = this.shadowRoot.querySelectorAll('board-theme');

    customElements.forEach((customElement) => {
      customElement.addEventListener('click', function () {
        customElement.classList.toggle('join');
      });
    });
  }
  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="board-theme-container">
        <hgroup>
          <h4>주제목록</h4>
          <p>주제에 참여하고 관심있는 게시글을 둘러보세요</p>
        </hgroup>

        <board-theme text="전체"></board-theme>
        <board-theme text="프로그래밍"></board-theme>
        <board-theme text="UI·UX"></board-theme>
        <board-theme text="디자인"></board-theme>
        <board-theme text="Frontend"></board-theme>
        <board-theme text="Backend"></board-theme>
      </div>
    `;
  }
}

customElements.define('board-theme-list', BoardThemeList);
