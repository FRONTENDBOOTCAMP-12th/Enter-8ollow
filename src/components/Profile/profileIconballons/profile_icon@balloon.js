class ChatBalloon extends HTMLElement {
  static observedAttributes = ['count', 'message'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const count = this.getAttribute('count') || 0;
    const message = this.getAttribute('message') || '';

    this.shadowRoot.innerHTML = `
      <style>
        @import url('/src/style/profile/icon@balloon.css');
      </style>
      <div class="chat-container">
        <!-- 사람 아이콘 -->
        <div class="chat-icon">
          <img src="/src/assets/people.svg" alt="User Icon" />
          <div class="chat-count">${count}</div>
        </div>

        <!-- 채팅 풍선 -->
        <div class="chat-bubble">${message}</div>
      </div>
    `;
  }
}

customElements.define('chat-balloon', ChatBalloon);
