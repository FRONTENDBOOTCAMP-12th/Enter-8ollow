import { LitElement, html, css } from 'lit';

import pb from '/src/api/pocketbase.js'; // PocketBase 인스턴스 import

class ProfileHeader extends LitElement {
  static styles = css`
    .ProfileHeader {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 1.5rem auto;
      font-family: Arial, sans-serif;
      max-width: 400px;
      padding: 0 1rem;
    }

    .ProfileImageContainer {
      position: relative;
      width: 80px;
      height: 80px;
      margin-bottom: 0.5rem;
    }

    .ProfileImage {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .UserInfo {
      font-size: 1.2rem;
      font-weight: bold;
    }
  `;

  static properties = {
    profileImage: { type: String },
    userInfo: { type: String },
  };

  constructor() {
    super();
    this.profileImage = '/default-avatar.png'; // 기본 프로필 이미지
    this.userInfo = '사용자 정보 없음'; // 기본 닉네임
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadUserData();
  }

  async loadUserData() {
    try {
      // localStorage에서 UID 가져오기
      const data = JSON.parse(localStorage.getItem('isLogin'));
      const UID = data?.UID; // UID 추출

      if (!UID) {
        console.warn('UID를 찾을 수 없습니다.');
        return;
      }

      console.log('UID:', UID);

      // PocketBase에서 UID에 해당하는 데이터 가져오기
      const record = await pb.collection('members').getOne(UID);

      if (record) {
        console.log('가져온 데이터:', record);

        // 프로필 이미지 URL 생성
        this.profileImage = record.profileImage
          ? pb.getFileUrl(record, record.profileImage)
          : '/default-avatar.png'; // 기본 이미지 설정

        // 사용자 정보 설정
        this.userInfo = record.nickName || '닉네임 없음';
      } else {
        console.warn('UID에 해당하는 데이터를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('유저 데이터를 가져오는 중 오류 발생:', error);
    }
  }

  render() {
    return html`
      <div class="ProfileHeader">
        <!-- 프로필 이미지 -->
        <div class="ProfileImageContainer">
          <img
            src="${this.profileImage}"
            alt="프로필 이미지"
            class="ProfileImage"
          />
        </div>

        <!-- 사용자 정보 -->
        <div class="UserInfo">${this.userInfo}</div>
      </div>
    `;
  }
}

customElements.define('profile-header', ProfileHeader);
