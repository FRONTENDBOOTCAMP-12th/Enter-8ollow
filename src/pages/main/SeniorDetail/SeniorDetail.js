import { LitElement, html, css } from 'lit';
import styles from '/src/pages/main/SeniorDetail/SeniorDetail.css?inline';

class DetailPage extends LitElement {
  static get properties() {
    return {
      story: { type: Object },
      storyId: { type: String },
    };
  }

  constructor() {
    super();
    this.story = null;
    this.storyId = this.getStoryIdFromUrl();
    this.fetchStory();
  }

  getStoryIdFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('story');
  }

  async fetchStory() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/seniorStory/records/${this.storyId}`
      );
      this.story = await response.json();
    } catch (error) {
      console.error('스토리 가져오기 실패:', error);
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
      <style>
        ${styles}
      </style>

      <div class="detail-container">
        <div class="button-group">
          <button @click="${this.handleCancel}" class="cancel">취소</button>
          <button @click="${this.handleUpdate}" class="update">수정</button>
        </div>

        <div class="story-content">
          <img
            class="story-image"
            src="${this.getImageURL()}"
            alt="스토리 이미지"
          />

          <div class="field">
            <label for="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              .value="${this.story.title}"
              @input="${this.handleInputChange}"
            />
          </div>

          <div class="field">
            <label for="content">내용</label>
            <textarea
              id="content"
              name="content"
              @input="${this.handleInputChange}"
            >
${this.story.content}</textarea
            >
          </div>

          <div class="field">
            <label for="author">작성자</label>
            <input
              type="text"
              id="author"
              name="author"
              .value="${this.story.author}"
              @input="${this.handleInputChange}"
            />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-page', DetailPage);
