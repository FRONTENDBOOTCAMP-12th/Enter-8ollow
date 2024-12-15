import { LitElement, html } from 'lit';
import s from '/src/pages/signUp/signUp.css?inline';
import pb from '/src/api/pocketbase';

import Swal from 'sweetalert2';

class SignUp extends LitElement {
  static properties = {
    title: { type: String }, // 토스트 타이틀
    disable: { type: Boolean }, // 버튼 비활성화 여부
    phoneNumberLength: { type: String }, // 핸드폰 번호
    authenticationNumber: { type: String }, // 인증 번호
    authenticationDisable: { type: Boolean }, // 인증 버튼 비활성화 여부

    answer: { type: String }, // 인증번호
    inputAuth: { type: String }, // 유저가 입력한 인증번호

    showInput: { type: Boolean }, // 인증번호 입력란 보이게
    authTitle: { type: String }, // 인증 버튼 타이틀
  };

  constructor() {
    super();
    this.disable = true;
    this.showInput = false;
    this.AuthenticationDisable = true;
    this.authTitle = '인증번호 받기';
  }

  updated(changedProperties) {
    // 인풋에 전화번호 넣을 때 (13자리)
    if (changedProperties.has('phoneNumberLength')) {
      if (this.phoneNumberLength === 13) {
        this.disable = false;
      } else {
        this.disable = true;
      }
    }

    // 인풋에 인증번호 넣을 때 (6자리)
    if (changedProperties.has('authenticationNumber')) {
      if (this.authenticationNumber === 6) {
        this.authenticationDisable = false;
      } else {
        this.authenticationDisable = true;
      }
    }
  }

  handleClick() {
    // 랜덤 인증번호 생성
    this.answer = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, '0');

    console.log(this.answer);

    // 토스트에 띄우기
    const Toast = Swal.mixin({
      toast: true,
      position: 'center-center',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: 'success',
      title: `${this.answer}`,
    });

    this.showInput = true;
  }

  handlePhoneNumberInput(e) {
    const input = e.composedPath().find((el) => el.tagName === 'INPUT');
    if (!input) return;

    this.phoneNumberLength = input.value.length;
    this.phoneNumber = input.value;
  }

  async fetchData() {
    try {
      const id = this.phoneNumber;

      await pb.collection('test').authWithPassword(id);

      const { record, token } = JSON.parse(
        localStorage.getItem('pocketbase_auth') ?? '{}'
      );

      localStorage.setItem(
        'auth',
        JSON.stringify({
          isAuth: !!record,
          user: record,
          token: token,
        })
      );
    } catch {}
  }

  async handleCheckAuth() {
    console.log(this.inputAuth);
    console.log(this.answer);
    // 인증번호 체크
    if (this.answer === this.inputAuth) {
      console.log('인증번호 일치');

      const selectedCategories = localStorage.getItem('selectedCategories');

      const data = {
        phoneNumber: this.phoneNumber,
        cartegory: selectedCategories,
      };
      console.log(data);

      const record = await pb.collection('test').create(data);
      console.log(record);
      // this.fetchData();
    } else {
      console.log('인증번호 불일치');
    }
  }

  /* ⭐️⭐️⭐️⭐️⭐️⭐️ composedPath는 이벤트 경로의 요소를 배열로 반환함 ⭐️⭐️⭐️⭐️⭐️⭐️ 
   closest로 사용하지 않은 이유는 input-component가 쉐도우 돔이라 접근이 불가능함  */

  render() {
    return html`<style>
        ${s}
      </style>

      <div class="app">
        <div class="info-container">
          <h2 class="title">
            안녕하세요! <br />
            휴대폰 번호로 가입해주세요.
          </h2>

          <p class="desc">
            휴대폰 번호는 안전하게 보관되며 서로에게 공개되지 않아요.
          </p>
        </div>

        <form class="input-container">
          <input-component
            maxlength="13"
            placeholder="휴대폰번호(- 없이 숫자만 입력)"
            type="phoneNumber"
            @input="${(e) => {
              const input = e
                .composedPath()
                .find((el) => el.tagName === 'INPUT');
              if (!input) return;

              this.phoneNumberLength = input.value.length;
              this.phoneNumber = input.value;
              // console.log(this.phoneNumberLength);
            }}"
          ></input-component>

          <auth-button
            title=${this.authTitle}
            ?disable=${this.disable}
            @click-event="${this.handleClick}"
          ></auth-button>

          ${this.showInput
            ? html`<input-component
                  placeholder="인증번호 입력"
                  maxlength="6"
                  @input="${(e) => {
                    const input = e
                      .composedPath()
                      .find((el) => el.tagName === 'INPUT');
                    if (!input) return;

                    this.authenticationNumber = input.value.length;
                    this.inputAuth = input.value;
                  }}"
                ></input-component>
                <p class="info">Hint. 사실 인증번호는 콘솔에 뜹니다</p>

                <common-button
                  title="동의하고 시작하기"
                  type="submit"
                  ?disable=${this.authenticationDisable}
                  @click-event="${this.handleCheckAuth}"
                ></common-button>
                <a href="">인증번호가 오지 않나요?</a> `
            : ''}
        </form>
      </div> `;
  }
}

customElements.define('sign-up', SignUp);
