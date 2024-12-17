import { LitElement, html, css } from 'lit';
import pb from '/src/api/pocketbase.js';

export class ProfileTemperature extends LitElement {
  static properties = {
    userId: { type: String }, // 사용자 ID
    temperature: { type: Number }, // 온도
  };

  static styles = css`
    @import './profile-temperature.css';
  `;

  constructor() {
    super();
    this.userId = ''; // 사용자 ID 초기값
    this.temperature = 36.5; // 기본 온도
  }

  async connectedCallback() {
    super.connectedCallback();

    try {
      // PocketBase에서 사용자 데이터 가져오기
      const userProfile = await pb.collection('profile').getOne(this.userId);

      // 거래 후기 수 (exchange_comment 필드)
      const exchangeComments = userProfile?.exchange_comment || 0;

      // 거래 후기 수당 0.1도씩 추가
      this.temperature = 36.5 + exchangeComments * 0.1;
    } catch (error) {
      console.error('온도 데이터 불러오기 실패:', error);
    }
  }

  render() {
    return html`
      <div class="temperature-container">
        <div>
          현재 온도:
          <span class="temperature-now">${this.temperature.toFixed(1)}°</span>
        </div>
        <div class="temperature-bar">
          <div
            class="temperature-fill"
            style="width: ${this.getBarWidth()}%"
          ></div>
        </div>
      </div>
    `;
  }

  getBarWidth() {
    // 온도를 비율로 변환 (최대 50도 가정)
    const maxTemperature = 50;
    return Math.min((this.temperature / maxTemperature) * 100, 100);
  }
}

customElements.define('profile-temperature', ProfileTemperature);
