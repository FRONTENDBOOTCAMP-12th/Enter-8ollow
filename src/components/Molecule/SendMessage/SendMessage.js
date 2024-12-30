import { LitElement, html, css } from 'lit';
import { styles } from '/src/components/Molecule/SendMessage/SendMessageCSS.js';
import pb from '/src/api/pocketbase';
import { EmojiButton } from '@joeattardi/emoji-button';

import {} from '/src/style/variable.css';

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

  handleEmoji() {
    const button = this.renderRoot.querySelector('.smile');
    const picker = new EmojiButton();
    console.log(picker);

    picker.on('emoji', (emoji) => {
      console.log(emoji);
      this.message += emoji.emoji;
    });

    button.addEventListener('click', () => {
      picker.togglePicker(button);
    });
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
        this.message = '';
      }
    } catch (e) {
      console.error('에러발생', e);
    }
  }

  render() {
    return html`
      <div class="container">
        <input
          type="text"
          id="message"
          .value="${this.message}"
          @input="${this.handleInput}"
          placeholder="메세지를 입력해주세요"
        />
        <button class="smile" @click="${this.handleEmoji}"></button>
        <button class="send" @click="${this.handelClick}"></button>
      </div>
    `;
  }
}

customElements.define('send-message', SendMessage);
