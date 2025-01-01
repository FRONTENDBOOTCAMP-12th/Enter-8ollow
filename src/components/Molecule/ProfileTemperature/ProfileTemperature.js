import { LitElement, html, css } from 'lit';
import pb from '/src/api/pocketbase';

class ProfileTemperature extends LitElement {
  static properties = {
    userId: { type: String }, // 사용자 ID
    initialTemp: { type: Number }, // 초기 온도
    currentTemp: { type: Number }, // 현재 온도
    items: { type: Array }, // 전체 데이터 리스트
  };

  static styles = css`
    .manner-temp-container {
      font-family: Arial, sans-serif;
      padding: 10px;
      max-width: 400px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .manner-header {
      font-size: 0.9em;
      font-weight: bold;
      margin-bottom: 5px;
      text-align: left;
    }

    .manner-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.9em;
      color: #555; /* 대비 강화 */
      margin-bottom: 5px;
    }

    .current-temp {
      color: #006400; /* 대비 강화 */
      font-weight: bold;
    }

    .manner-bar {
      width: 100%;
      height: 10px;
      background-color: #d3d3d3; /* 대비 강화 */
      border-radius: 5px;
      overflow: hidden;
    }

    .manner-progress {
      height: 100%;
      background-color: #006400; /* 대비 강화 */
      border-radius: 5px;
    }
  `;

  constructor() {
    super();
    this.userId = 'no4l9i8q06plv7f';
    this.initialTemp = 36.5;
    this.currentTemp = this.initialTemp;
    this.items = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUserData();
    this.fetchAllData();
  }

  async fetchUserData() {
    try {
      const record = await pb.collection('profile').getOne(this.userId);
      const exchangeComment = record?.exchange_comment || 0;
      this.calculateTemperature(exchangeComment);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async fetchAllData() {
    try {
      const records = await pb.collection('profile').getFullList({
        sort: '-created',
      });

      this.items = records.reverse();
    } catch (error) {
      console.error('Error fetching all data:', error);
    }
  }

  calculateTemperature(exchangeComment) {
    const increment = exchangeComment * 0.1;
    this.currentTemp = this.initialTemp + increment;
    this.requestUpdate();
  }

  get progressWidth() {
    const maxTemp = 40;
    return Math.min(
      ((this.currentTemp - this.initialTemp) / (maxTemp - this.initialTemp)) *
        100,
      100
    );
  }

  render() {
    return html`
      <div class="manner-temp-container" aria-labelledby="manner-header">
        <!-- 열정 온도 헤더 -->
        <div class="manner-header" id="manner-header">열정 온도</div>

        <!-- 온도 정보 표시 -->
        <div class="manner-info" aria-describedby="temperature-info">
          <span>첫 온도: ${this.initialTemp.toFixed(1)}℃</span>
          <span class="current-temp">
            현재 온도: ${this.currentTemp.toFixed(1)}℃ 😊
          </span>
        </div>

        <!-- 게이지 바 -->
        <div
          class="manner-bar"
          role="progressbar"
          aria-valuenow="${this.currentTemp.toFixed(1)}"
          aria-valuemin="${this.initialTemp}"
          aria-valuemax="40"
          aria-label="현재 온도 진행 상태"
        >
          <div
            class="manner-progress"
            style="width: ${this.progressWidth}%;"
          ></div>
        </div>
      </div>
    `;
  }
}

customElements.define('profile-temperature', ProfileTemperature);
