import { LitElement, html, css } from 'lit';

class ProfileContents extends LitElement {
  static styles = css`
    .profile-contents {
      width: 262px;
      height: 53px;
      padding: 16px 0 0 0;
      background: #ffffff;
      border-bottom: 0.3px solid #919191;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 188px;
      cursor: pointer;
    }
    .profile-text {
      font-family: Pretendard, sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #000000;
    }
    .profile-icon {
      width: 16px;
      height: 16px;
    }
  `;

  render() {
    return html`
      <div class="profile-contents" @click=${this.handleClick}>
        <div class="profile-text">text</div>
        <div class="profile-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    `;
  }

  handleClick() {
    window.location.href = 'https://example.com';
  }
}

customElements.define('profile-contents', ProfileContents);
