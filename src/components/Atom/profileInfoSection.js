import { LitElement, html, css } from 'lit';
import pb from '/src/api/pocketbase'; // PocketBase 연결

class ProfileInfoSection extends LitElement {
  static properties = {
    nickName: { type: String }, // 닉네임
    profileImage: { type: String }, // 프로필 이미지
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      font-family: Pretendard, sans-serif;
    }

    .profile-container {
      display: flex;
      align-items: center;
      background: white;
      padding: 16px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      width: 300px;
      margin: 16px auto;
    }

    .profile-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 16px;
    }

    .nickname {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  `;

  constructor() {
    super();
    this.nickName = ''; // 초기 닉네임
    this.profileImage = ''; // 초기 프로필 이미지
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadMemberData(); // 데이터 로드
  }

  // 로그인된 사용자의 데이터를 가져오는 메서드
  async loadMemberData() {
    try {
      if (!pb.authStore.isValid) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 현재 로그인된 사용자 ID 가져오기
      const currentUser = pb.authStore.model;

      // members 컬렉션에서 해당 사용자 데이터 가져오기
      const memberData = await pb
        .collection('members')
        .getFirstListItem(`id="${currentUser.id}"`);

      // 닉네임과 프로필 이미지 설정
      this.nickName = memberData.nickName;
      this.profileImage = memberData.profileImage || '/default-avatar.png'; // 기본 이미지
    } catch (error) {
      console.error('Failed to fetch member data:', error);
    }
  }

  render() {
    return html`
      <div class="profile-container">
        <img
          src="${this.profileImage}"
          alt="프로필 이미지"
          class="profile-image"
        />
        <span class="nickname">${this.nickName}</span>
      </div>
    `;
  }
}

customElements.define('profile-info-section', ProfileInfoSection);
