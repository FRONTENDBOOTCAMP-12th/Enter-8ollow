import { LitElement, html, css } from 'lit';

export class ProfileTemperature extends LitElement {
  // 스타일 정의
  static styles = css`
    .manner-temp-container {
      font-family: Arial, sans-serif;
      padding: 10px;
      max-width: 400px; /* 최대 너비 설정 */
      margin: 0 auto; /* 양쪽 여백 및 가운데 정렬 */
      box-sizing: border-box; /* 패딩이 너비에 포함되도록 설정 */
    }

    .manner-header {
      font-size: 0.9em;
      font-weight: bold;
      margin-bottom: 5px;
      text-align: center;
    }

    .manner-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.9em;
      color: #777;
      margin-bottom: 5px;
    }

    .current-temp {
      color: #27ae60; /* 초록색 강조 */
      font-weight: bold;
    }

    .manner-bar {
      width: 100%;
      height: 10px;
      background-color: #e6e6e6;
      border-radius: 5px;
      overflow: hidden;
    }

    .manner-progress {
      height: 100%;
      background-color: #27ae60;
      border-radius: 5px;
    }
  `;

  // 속성 정의
  static properties = {
    initialTemp: { type: Number },
    currentTemp: { type: Number },
  };

  constructor() {
    super();
    this.initialTemp = 36.5;
    this.currentTemp = this.initialTemp; // 초기 온도
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  // PocketBase 데이터 가져오기
  async fetchData() {
    const baseUrl =
      import.meta.env.VITE_PB_API || 'https://follow-eight.pockethost.io/api';
    try {
      const response = await fetch(`${baseUrl}/collections/profile/records`);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const exchangeCount = data.items[0].exchange_comment || 0;
        this.calculateTemperature(exchangeCount);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // 온도 계산 함수
  calculateTemperature(exchangeCount) {
    const increment = exchangeCount * 0.1;
    this.currentTemp = this.initialTemp + increment;
    this.requestUpdate();
  }

  // 진행 바 너비 계산
  get progressWidth() {
    const maxTemp = 40; // 최대 온도
    return (
      ((this.currentTemp - this.initialTemp) / (maxTemp - this.initialTemp)) *
      100
    );
  }

  render() {
    return html`
      <div class="manner-temp-container">
        <div class="manner-header">
          <strong>열정온도 ℹ</strong>
        </div>
        <div class="manner-info">
          <span>첫 온도 ${this.initialTemp.toFixed(1)}℃</span>
          <span class="current-temp">${this.currentTemp.toFixed(1)}℃ 😊</span>
        </div>
        <div class="manner-bar">
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
