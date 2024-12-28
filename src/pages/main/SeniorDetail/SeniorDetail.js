import { LitElement, html, css } from 'lit';
import { styles } from '/src/pages/main/SeniorDetail/SeniorDetailCSS.js?inline';
import pb from '/src/api/pocketbase';

class DetailPage extends LitElement {
  static get properties() {
    return {
      story: { type: Object },
      storyId: { type: String },
    };
  }

  static styles = styles;

  constructor() {
    super();
    this.story = null;
    this.storyId = this.getStoryIdFromUrl();
    this.fetchStory();
    this.fetchComments();
  }

  getStoryIdFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('story');
  }

  async fetchStory() {
    try {
      this.story = await pb.collection('seniorStory').getOne(this.storyId);
    } catch (error) {
      console.error('실패:', error);
    }
  }

  async fetchComments() {
    try {
      this.comments = await pb.collection('comments').getFullList({
        filter: `SeniorPost='${this.storyId}'`,
      });
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

  handleInputChange(e) {
    const { name, value } = e.target;
    this.story = { ...this.story, [name]: value };
  }

  async handleUpdate() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/seniorStory/records/${this.storyId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: this.story.title,
            content: this.story.content,
            author: this.story.author,
          }),
        }
      );
      const updatedStory = await response.json();
      console.log('업데이트 성공:', updatedStory);
      alert('스토리가 수정되었습니다.');
    } catch (error) {
      console.error('스토리 수정 실패:', error);
      alert('스토리 수정에 실패했습니다.');
    }
  }

  handleCancel() {
    history.back();
  }

  render() {
    if (!this.story) {
      return html`<p>로딩 중...</p>`;
    }

    return html`
      <div class="detail-container">
        <div class="field">
          <h2>${this.story.title}</h2>
        </div>

        <div class="field">
          <span class="author">작성자: ${this.story.author}</span>
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
    `;
  }
}

customElements.define('detail-page', DetailPage);
