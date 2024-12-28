import { LitElement, html, css } from 'lit';
import { styles } from '/src/components/Molecule/SendMessage/SendMessageCSS.js';
import pb from '/src/api/pocketbase';

class SendMessage extends LitElement {
  static get properties() {
    return {
      postId: { type: String },
      message: { type: String },
    };
  }

  static styles = styles;

  constructor() {
    super();
    this.message = '';
    this.postId = this.getStoryIdFromUrl();
  }

  handleInput(event) {
    this.message = event.target.value;
    console.log(this.message);
  }

  getStoryIdFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('story' || 'post' || 'qnadetail');
  }

  async handelClick() {
    const { UID } = JSON.parse(localStorage.getItem('isLogin'));

    console.log('click');
    const data = {
      SeniorPost: this.postId,
      user: UID,
      contents: this.message,
    };

    try {
      if (this.message === '') {
        throw new Error('메세지를 입력해주세요');
      } else {
        const record = await pb.collection('comments').create(data);
        console.log(record);
      }
    } catch (e) {
      console.error('에러발생', e);
    }
  }

  render() {
    return html`
      <input
        type="text"
        id="message"
        .value="${this.message}"
        @input="${this.handleInput}"
      />

      <button @click="${this.handelClick}">전송</button>
    `;
  }
}

customElements.define('send-message', SendMessage);
