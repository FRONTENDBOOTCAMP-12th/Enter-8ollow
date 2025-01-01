import { LitElement, html, css } from 'lit';
import { styles } from '/src/pages/main/SeniorDetail/SeniorDetailCSS.js?inline';
import pb from '/src/api/pocketbase';

class BoardDetail extends LitElement {
  static get properties() {
    return {
      story: { type: Object },
      storyId: { type: String },
      nickname: { type: String },
      comments: { type: Array },
    };
  }

  static styles = styles;

  constructor() {
    super();
    this.story = null;
    this.comments = [];
    this.storyId = this.getStoryIdFromUrl();
    this.fetchStory();
    this.fetchComments();
  }

  getStoryIdFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('detail');
  }

  async fetchStory() {
    try {
      this.story = await pb.collection('qnaPosts').getOne(this.storyId);
    } catch (error) {
      console.error('실패:', error);
    }
  }

  async fetchComments() {
    try {
      const rawComments = await pb.collection('comments').getFullList({
        filter: `SeniorPost='${this.storyId}'`,
      });

      console.log('댓글:', rawComments);

      this.comments = await Promise.all(
        rawComments.map(async (comment) => {
          this.nickname = await this.getNickname(comment.user);

          console.log({ ...comment, nickname: this.nickname });
          return { ...comment, nickname: this.nickname };
        })
      );
      console.log('댓글:', this.comments);
    } catch (error) {
      console.error('댓글 가져오기 실패:', error);
    }
  }

  getImageURL() {
    if (!this.story || !this.story.iamge) {
      return '/src/assets/test/test2.png';
    }
    return `${import.meta.env.VITE_PB_API}/files/${this.story.collectionId}/${this.story.id}/${this.story.iamge}`;
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

  handleInputChange(e) {
    const { name, value } = e.target;
    this.story = { ...this.story, [name]: value };
  }

  handleCancel() {
    history.back();
  }

  render() {
    if (!this.story) {
      return html`<p>로딩 중...</p>`;
    }

    return html`
      <with-us text="📝 질의응답"></with-us>
      <div class="detail-container">
        <div class="field">
          <h2>${this.story.title}</h2>
        </div>

        <div class="field">
          <span class="author">작성자: ${this.nickname}</span>
        </div>

        <img
          class="story-image"
          src="${this.getImageURL()}"
          alt="스토리 이미지"
        />

        <div class="field">
          <p>${this.story.contents}</p>
        </div>
      </div>

      <send-message></send-message>

      <comment-list .comments="${this.comments}"></comment-list>
    `;
  }
}

customElements.define('board-detail', BoardDetail);
