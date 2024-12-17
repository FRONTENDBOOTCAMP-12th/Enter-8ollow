import { LitElement, html, css } from 'lit';

export class ProfilePhoto extends LitElement {
  static properties = {
    user: { type: Object }, // 사용자 정보
  };

  static styles = css`
    @import '/styles/profile-photo.css';
  `;

  render() {
    // 로컬 이미지 경로 설정
    const defaultAvatar = '/src/assets/test';
    const userAvatar = this.user?.avatar
      ? `/assets/${this.user.avatar}`
      : defaultAvatar;

    return html`
      <div class="photo">
        <img src="${userAvatar}" alt="Profile Photo" />
      </div>
    `;
  }
}

customElements.define('profile-photo', ProfilePhoto);
