import { LitElement, html, css } from 'lit';
import { styles } from '/src/pages/qnaBoard/qnaBoardCSS.js';

class QnaBoard extends LitElement {
  static get properties() {
    return {
      article: { type: Object },
      articleId: { type: String },
    };
  }

  static styles = styles;

  constructor() {
    super();
    this.article = null;
    this.articleId = this.getArticleIdFromUrl();
    this.fetchArticle();
  }

  getArticleIdFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('qnadetail');
  }

  async fetchArticle() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/qnaPosts/records/${this.articleId}`
      );
      this.article = await response.json();
    } catch (error) {
      console.error('가져오기 실패:', error);
    }
  }

  render() {
    if (!this.article) {
      return html`<p>로딩 중...</p>`;
    }

    const comments = Array.isArray(this.article.comment)
      ? this.article.comment
      : [];

    return html`
      <div class="detail-container">
        <with-us></with-us>
        <div class="organizer-profile">
          <span class="sss">사진 ${this.article.ssss}</span>
          <span class="author">이름${this.article.author}</span>
          <span class="ddd">인증횟수 ${this.article.dddd}</span>
          <span class="created">• ${this.article.created}</span>
        </div>
      </div>

      <div class="field">
        <h2><span class="question">Q. </span>${this.article.title}</h2>
        <p>${this.article.content}</p>
        <img
          class="article-image"
          src=${this.article.img}
          alt="스토리 이미지"
        />
      </div>

      <div class="comments-section">
        <input
          id="comment-input"
          class="comment-input"
          type="text"
          placeholder="댓글을 입력해주세요."
        />
        <button type="submit" class="comment-submit">추가</button>

        ${comments.length === 0
          ? html`<p class="no-comments">
              아직 댓글이 없어요. 가장 먼저 댓글을 남겨보세요.
            </p>`
          : html`
              <ul>
                ${comments.map((comment) => html`<li>${comment.comment}</li>`)}
              </ul>
            `}
      </div>
    `;
  }
}

customElements.define('qna-board', QnaBoard);
