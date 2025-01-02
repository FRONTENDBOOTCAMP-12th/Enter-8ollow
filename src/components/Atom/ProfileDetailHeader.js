import { LitElement, html, css } from 'lit';
import profileImageSrc from '/src/assets/MainSwiper.png';

class SimpleProfileHeader extends LitElement {
  static properties = {
    username: { type: String },
    profileImage: { type: String },
    level: { type: Number },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      background-color: var(--background, #ffffff);
      padding: 16px;
      align-items: center;
      border-bottom: 1px solid var(--components--component-lightgray, #e0e0e0);
      box-sizing: border-box;
      width: 90%;
    }

    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .username {
      font-size: var(--label---large, 1.33rem);
      font-weight: 600;
      color: var(--contents--content-primary, #000000);
    }

    .level {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: var(--label---small, 0.75rem);
      font-weight: 600;
      color: var(--secondary, #5a85ee);
      border: 1px solid var(--secondary, #5a85ee);
      padding: 4px 8px;
      border-radius: 10px;
    }

    .profile-image {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
  `;

  constructor() {
    super();
    this.username = 'EUID';
    this.profileImage = profileImageSrc;
    this.level = 4;
  }

  render() {
    return html`
      <div class="header-container">
        <div class="user-info">
          <span class="username">${this.username}</span>
          <span class="level">${this.level}</span>
        </div>
        <img
          class="profile-image"
          src="${this.profileImage}"
          alt="Profile Image"
        />
      </div>
    `;
  }
}

customElements.define('simple-profile-header', SimpleProfileHeader);
