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
    /* 전체 컨테이너 */
    .manner-temp-container {
      font-family: Arial, sans-serif;
      padding: 10px;
      max-width: 400px; /* 최대 너비 설정 */
      margin: 0 auto; /* 양쪽 여백 및 가운데 정렬 */
      box-sizing: border-box; /* 패딩이 너비에 포함되도록 설정 */
    }

    /* 헤더 스타일 */
    .manner-header {
      font-size: 0.9em;
      font-weight: bold;
      margin-bottom: 5px;
      text-align: left;
    }

    /* 정보 섹션 */
    .manner-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.9em;
      color: #777;
      margin-bottom: 5px;
    }

    /* 현재 온도 강조 */
    .current-temp {
      color: #27ae60; /* 초록색 강조 */
      font-weight: bold;
    }

    /* 진행 바 컨테이너 */
    .manner-bar {
      width: 100%;
      height: 10px;
      background-color: #e6e6e6;
      border-radius: 5px;
      overflow: hidden;
    }

    /* 진행 바 스타일 */
    .manner-progress {
      height: 100%;
      background-color: #27ae60;
      border-radius: 5px;
    }
  `;

  constructor() {
    super();
    this.userId = 'no4l9i8q06plv7f'; // 예시 사용자 ID
    this.initialTemp = 36.5; // 초기 온도
    this.currentTemp = this.initialTemp; // 현재 온도 초기화
    this.items = []; // 전체 데이터 리스트
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUserData();
    this.fetchAllData();
  }

  /**
   * 특정 사용자 ID로 데이터 가져오기
   */
  async fetchUserData() {
    try {
      const record = await pb.collection('profile').getOne(this.userId);
      const exchangeComment = record?.exchange_comment || 0;

      // 온도 계산 및 업데이트
      this.calculateTemperature(exchangeComment);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  /**
   * 전체 데이터 가져오기
   */
  async fetchAllData() {
    try {
      // PocketBase SDK로 모든 레코드 가져오기 (최신순 정렬)
      const records = await pb.collection('profile').getFullList({
        sort: '-created',
      });

      console.log('서버에서 받은 전체 데이터:', records);

      // 역순 정렬 (필요 시)
      this.items = records.reverse();
    } catch (error) {
      console.error('Error fetching all data:', error);
    }
  }

  /**
   * 온도 계산 함수
   * @param {number} exchangeComment - 교환 댓글 수
   */
  calculateTemperature(exchangeComment) {
    const increment = exchangeComment * 0.1; // 댓글 수에 따른 온도 증가량
    this.currentTemp = this.initialTemp + increment; // 현재 온도 업데이트
    this.requestUpdate(); // LitElement 화면 업데이트 요청
  }

  /**
   * 진행 바 너비 계산
   * @returns {number} - 진행 바 너비 (%)
   */
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
      <div class="manner-temp-container">
        <!-- 열정 온도 헤더 -->
        <div class="manner-header">열정온도 </div>

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

        
        </ul>
      </div>
    `;
  }
}

customElements.define('profile-temperature', ProfileTemperature);
