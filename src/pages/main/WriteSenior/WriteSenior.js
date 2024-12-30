import { LitElement, html, css } from 'lit';
import { styles } from '/src/pages/main/SeniorStory/SeniorStoryCSS?inline';
import pb from '/src/api/pocketbase';

class WriteSenior extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      title: { type: String },
      content: { type: String },
      author: { type: String },
    };
  }

  static styles = styles;

  constructor() {
    super();

    const UID = this.getUid();
  }

  async _onSubmit(e) {
    e.preventDefault();

    const titleValue = e.target.title.value;
    console.log(titleValue);

    const contentValue = e.target.content.value;
    console.log(contentValue);

    console.log(this.author);

    const data = {
      title: titleValue,
      contents: contentValue,
      author_test: this.author,
      iamge: '',
    };

    console.log(data);
    const record = await pb.collection('seniorStory').create(data);
  }

  getUid() {
    const data = JSON.parse(localStorage.getItem('isLogin'));

    console.log(typeof data);

    const { UID } = data;

    this.author = UID;
  }

  async getNickname(uid) {
    try {
      const user = await pb.collection('members').getOne(uid);
      console.log(user.nickName);

      return user.nickName || '';
    } catch (error) {
      console.error(`닉네임 가져오기 실패 (UID: ${uid}):`, error);
      return 'Unknown User';
    }
  }

  render() {
    return html`
      <h1 class="sr-only">글쓰기</h1>

      <form @submit=${this._onSubmit}>
        <input type="text" id="title" placeholder="제목을 입력해주세요" />
        <label htmlFor="title">제목 </label>

        <textarea id="content" placeholder="내용을 입력해주세요"></textarea>
        <label htmlFor="content">내용 </label>

        <button type="submit">전송</button>

        <finished-component></finished-component>
      </form>
    `;
  }
}

customElements.define('write-senior', WriteSenior);
