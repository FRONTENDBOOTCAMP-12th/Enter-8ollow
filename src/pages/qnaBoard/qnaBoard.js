import { LitElement, html } from 'lit';
import { styles } from '/src/pages/qnaBoard/qnaBoardCSS.js';
import pb from '/src/api/pocketbase';

class QnaBoard extends LitElement {
  static get properties() {
    return {
      article: { type: Object },
      articleId: { type: String },
      comments: { type: Array },
      renderImgHtml: {type: String}
    };
  }
  static styles = styles;

  static styles = styles;

  constructor() {
    super();
    this.article = null;
    this.articleId = this.getArticleIdFromUrl();
    this.comments = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchComments();
  }

  async fetchArticle() {
    try {
      this.article = await pb.collection('qnaPosts').getOne(this.articleId);
      this.requestUpdate();
    } catch (error) {
      console.error('게시글 가져오기 실패:', error);
    }
  }

  async fetchComments() {
    try {
      const rawComments = await pb.collection('comments').getFullList({
        filter: `qnadetail='${this.articleId}'`,
      });

      this.comments = await Promise.all(
        rawComments.map(async (comment) => {
          const nickname = await this.getNickname(comment.user);
          return { ...comment, nickname };
        })
      );

      console.log('댓글:', this.comments);
      this.requestUpdate();
    } catch (error) {
      console.error('댓글 가져오기 실패:', error);
    }
  }

  async getNickname(uid) {
    try {
      const user = await pb.collection('members').getOne(uid);
      return user.nickName || '';
    } catch (error) {
      console.error(`닉네임 가져오기 실패 (UID: ${uid}):`, error);
      return 'Unknown User';
    }
  }

  getArticleIdFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('qnadetail');
  }


  getImageURL() {
    if (!this.article || !this.article.img) {
      return '/src/assets/test/test2.png';

    }
    return `${import.meta.env.VITE_PB_API}/files/${this.article.collectionId}/${this.article.id}/${this.article.img}`;
  }

  firstUpdated() {
    this.fetchArticle();
  }

  isImageTrue() {
    if (this.article.img !== "") {
      return html`
        <img
          class="article-image"
          src="${this.getImageURL()}"
          alt="이미지"
        />
      `;
    } else {
      return null;
    }
  }
  

    return html`
      <div class="detail-container">
        <with-us></with-us>
        <div class="organizer-profile">
          <span class="sss">사진 ${this.article.ssss}</span>
          <span class="author"> ${this.article.author}</span>

          <span class="ddd">인증횟수 ${this.article.dddd}</span>
          <span class="created">• ${this.article.created}</span>
        </div>
      </div>

      <div class="field">
        <h2><span class="question">Q. </span>${this.article.title}</h2>
        <p>${this.article.content}</p>
        ${this.isImageTrue()}
      </div>

      <send-message></send-message>
      <comment-list .comments="${this.comments}"></comment-list>
    `;
  }
}

customElements.define('qna-board', QnaBoard);
