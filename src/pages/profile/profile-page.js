import { LitElement, html, css } from 'lit';
import pb from '/src/api/pocketbase';
import '/src/components/Profile/profile-photo/profile-photo';
import '/src/components/Profile/profile-temperature/profile-temperature';

export class ProfilePage extends LitElement {
  static properties = {
    profileData: { type: Object },
    temperature: { type: Number },
  };

  static styles = css`
    @import './profile-page.css';
  `;

  constructor() {
    super();
    this.profileData = null;
    this.temperature = 36.5; // 기본값
  }

  async connectedCallback() {
    super.connectedCallback();
    try {
      // PocketBase에서 'profile' 컬렉션의 첫 번째 데이터 가져오기
      const response = await pb.collection('profile').getFullList();
      const profile = response[0]; // 첫 번째 프로필 데이터 사용

      // 데이터 설정
      this.profileData = profile;
      this.temperature = 36.5 + (profile.badge || 0) * 0.5; // 뱃지 개수에 따른 온도 계산
    } catch (error) {
      console.error('PocketBase 연결 실패:', error);
    }
  }

  render() {
    if (!this.profileData) {
      return html`<p>Loading...</p>`; // 데이터가 없을 때 로딩 표시
    }

    const { badge, selling_product, exchange_comment, manner_comment } =
      this.profileData;

    return html`
      <div class="profile-page">
        <!-- 프로필 사진 컴포넌트 -->
        <profile-photo .user=${this.profileData}></profile-photo>

        <!-- 온도 표시 컴포넌트 -->
        <profile-temperature
          .temperature=${this.temperature}
        ></profile-temperature>

        <!-- 사용자 정보 -->
        <p>뱃지 개수: ${badge}</p>
        <p>판매 중인 상품: ${selling_product}</p>
        <p>교환 댓글 수: ${exchange_comment}</p>
        <p>매너 댓글: ${manner_comment}</p>
      </div>
    `;
  }
}

customElements.define('profile-page', ProfilePage);
