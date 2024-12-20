import { LitElement, html, css } from 'lit';
import s from '/src/components/Profile/profile-temperature/profile-temperature.css?inline';
import pb from '/src/api/pocketbase';

class ProfileTemperature extends LitElement {

  static properties = {
    userId: { type: String }, // 사용자 ID
    initialTemp: { type: Number }, // 초기 온도
    currentTemp: { type: Number }, // 현재 온도
  };

  constructor() {
    super();
    this.userId = 'no4l9i8q06plv7f'; // 예시 사용자 ID
    this.initialTemp = 36.5; // 초기 온도
    this.currentTemp = this.initialTemp; // 현재 온도 초기화
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchDataById();
  }

  // 특정 사용자 ID로 데이터 가져오기
  async fetchDataById() {
    try {
      const record = await pb.collection('profile').getOne('no4l9i8q06plv7f');

      console.log(record);

      const exchangeComment = record?.exchange_comment || 0;

      // 온도 계산 및 업데이트
      this.calculateTemperature(exchangeComment);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async fetchData() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/profile/records`
      );
      const data = await response.json();
      console.log('서버에서 받은 전체 데이터:', data);

      // 클라이언트에서 역순 정렬
      this.items = (data.items || []).reverse();
      
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  }

  // 온도 계산 함수
  calculateTemperature(exchangeComment) {
    const increment = exchangeComment * 0.1; // 교환 댓글 수에 따른 온도 증가량
    this.currentTemp = this.initialTemp + increment; // 현재 온도 업데이트
    this.requestUpdate(); // LitElement 화면 업데이트 요청
  }

  // 진행 바 너비 계산
  get progressWidth() {
    const maxTemp = 40; // 최대 온도 기준
    return Math.min(
      ((this.currentTemp - this.initialTemp) / (maxTemp - this.initialTemp)) *
        100,
      100
    ); // 100%를 초과하지 않도록 제한
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div class="manner-temp-container">
        <!-- 열정 온도 헤더 -->
        <div class="manner-header">열정온도 ℹ</div>

        <!-- 온도 정보 표시 -->
        <div class="manner-info">
          <span>첫 온도: ${this.initialTemp.toFixed(1)}℃</span>
          <span class="current-temp">
            현재 온도: ${this.currentTemp.toFixed(1)}℃ 😊
          </span>
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
