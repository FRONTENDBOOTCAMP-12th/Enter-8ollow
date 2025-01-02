import { LitElement, html, css } from 'lit';
import pb from '/src/api/pocketbase'; // PocketBase 연결

class ProfileInfoSection extends LitElement {
  static properties = {
    title: { type: String }, // 섹션 제목
    fields: { type: Array }, // 필드 리스트
    isModalVisible: { type: Boolean }, // 모달 표시 여부
    currentField: { type: Object }, // 현재 편집 중인 필드
    newValue: { type: String }, // 새 입력값
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      font-family: Pretendard, sans-serif;
      background-color: #f9f9f9;
    }

    .info-section {
      background: white;
      width: 90%;
      border-radius: 10px;
      padding: 16px;
      margin-top: 16px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }

    .info-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      font-size: 14px;
      cursor: pointer;
    }

    .info-item .profile-photo {
      width: 50px;
      height: 50px;
      border-radius: 50%; /* 원형으로 만들기 */
      object-fit: cover;
    }

    .info-item .label {
      color: gray;
    }

    /* 모달 스타일 */
    .modal {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }

    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      width: 80%;
      max-width: 400px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }

    .modal-content input {
      width: 100%;
      padding: 10px;
      margin-bottom: 16px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 14px;
    }

    .modal-content button {
      padding: 10px 20px;
      background-color: var(--secondary, #5a85ee);
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.title = '정보'; // 기본 제목
    this.fields = [];
    this.isModalVisible = false;
    this.currentField = null;
    this.newValue = '';
  }

  openModal(field) {
    this.currentField = field;
    this.newValue = field.value;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.currentField = null;
    this.newValue = '';
  }

  async saveField() {
    if (this.currentField) {
      try {
        // PocketBase 업데이트
        await pb.collection('profile').update('no4l9i8q06plv7f', {
          [this.currentField.label]: this.newValue,
        });
        // 필드 값 업데이트
        this.fields = this.fields.map((field) =>
          field.label === this.currentField.label
            ? { ...field, value: this.newValue }
            : field
        );
        alert('정보가 업데이트되었습니다.');
      } catch (error) {
        console.error('Failed to update field:', error);
        alert('업데이트 실패. 다시 시도해주세요.');
      }
      this.closeModal();
    }
  }

  render() {
    return html`
      <div class="info-section">
        <div class="info-header">
          <span>${this.title}</span>
        </div>
        ${this.fields.map(
          (field) => html`
            <div
              class="info-item"
              @click=${() => (field.editable ? this.openModal(field) : null)}
            >
              <span>${field.label}</span>
              ${field.label === '프로필 사진'
                ? html`<img
                    src="${field.value}"
                    alt="프로필 사진"
                    class="profile-photo"
                  />`
                : html`<span>${field.value}</span>`}
            </div>
          `
        )}
      </div>

      <!-- 모달 -->
      ${this.isModalVisible
        ? html`
            <div class="modal">
              <div class="modal-content">
                <input
                  type="text"
                  .value=${this.newValue}
                  @input=${(e) => (this.newValue = e.target.value)}
                />
                <button @click=${this.saveField}>저장</button>
                <button @click=${this.closeModal}>취소</button>
              </div>
            </div>
          `
        : ''}
    `;
  }
}

customElements.define('profile-info-section', ProfileInfoSection);
