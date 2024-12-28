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
        .ChatContainer {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: Pretendard, sans-serif;
          font-size: 14px;
          font-weight: 400;
        }

        .ChatIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--background);
          position: relative;
        }

        .ChatIcon img {
          width: 16px;
          height: 16px;
        }

        .ChatCount {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: var(--secondary);
          color: var(--background);
          font-size: 10px;
          font-weight: 600;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ChatBubble {
          max-width: 250px;
          background-color: var(--secondary);
          color: var(--background);
          border-radius: 12px;
          padding: 8px 12px;
          word-wrap: break-word;
          line-height: 1.5;
        }
      </style>
      <div class="ChatContainer">
        <!-- 사람 아이콘 -->
        <div class="ChatIcon">
          <img src="/src/assets/people.svg" alt="User Icon" />
          <div class="ChatCount">${count}</div>
        </div>

        <!-- 채팅 풍선 -->
        <div class="ChatBubble">${message}</div>
      </div>
    `;
  }
}

customElements.define('chat-balloon', ChatBalloon);
