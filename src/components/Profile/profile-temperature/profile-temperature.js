import { LitElement, html } from 'lit';
import s from './profile-temperature.css?inline';
import pb from '/src/api/pocketbase';

class ProfileTemperature extends LitElement {
  static styles = s;

  static properties = {
    userId: { type: String }, // 사용자의 ID
    initialTemp: { type: Number }, // 초기 온도
    currentTemp: { type: Number }, // 현재 온도
  };

  constructor() {
    super();
    this.userId = 'no4l9i8a06plv7f'; // 예시 사용자 ID (사용자 ID를 여기에 설정)
    this.initialTemp = 36.5; // 초기 온도
    this.currentTemp = this.initialTemp; // 현재 온도
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchDataById();
  }

  // 특정 사용자 ID로 데이터 가져오기
  async fetchDataById() {
    try {
      const record = await pb.collection('profile').getOne(this.userId);
      const exchangeComment = record.exchange_comment || 0;

      // 온도 계산
      this.calculateTemperature(exchangeComment);
    } catch (error) {
      console.error('Error fetching data:', error);
      Swal.fire({
        title: '데이터 불러오기 실패',
        text: '잠시 후 다시 시도해주세요.',
        icon: 'error',
      });
    }
  }

  // 온도 계산 함수
  calculateTemperature(exchangeComment) {
    const increment = exchangeComment * 0.1; // 0.1을 곱해 증가량 계산
    this.currentTemp = this.initialTemp + increment; // 현재 온도 업데이트
    this.requestUpdate(); // 화면 업데이트 요청
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
        <!-- 열정 온도 헤더 -->
        <div class="manner-header">
          <strong>열정온도 ℹ</strong>
        </div>

        <!-- 온도 정보 표시 -->
        <div class="manner-info">
          <span>첫 온도: ${this.initialTemp.toFixed(1)}℃</span>
          <span class="current-temp"
            >현재 온도: ${this.currentTemp.toFixed(1)}℃ 😊</span
          >
        </div>

        <!-- 게이지 바 -->
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
