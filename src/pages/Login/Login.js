import { LitElement, html } from 'lit';
import s from '/src/pages/register/register.css?inline';
import pb from '/src/api/pocketbase';

import Swal from 'sweetalert2';

class Login extends LitElement {
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

  async handleLogin(e) {
    e.preventDefault();
    console.log('click');

    try {
      const resultList = await pb.collection('members').getList(1, 1, {
        filter: `phoneNumber = "${this.phoneNumber}"`,
      });

      console.log(resultList);

      if (resultList.items.length === 0) {
        Swal.fire({
          title: '로그인 실패',
          text: '가입되지 않은 번호입니다',
          icon: 'error',
        }).then((res) => {
          location.href = '/src/pages/register/';
        });
      } else {
        Swal.fire({
          title: '로그인 성공',
          text: '메인 페이지로 이동합니다.',
          icon: 'success',
          confirmButtonText: '닫기',
        }).then((res) => {
          location.href = '/src/pages/main/exchange.html';
        });
      }
    } catch {
      Swal.fire({
        title: '로그인 실패',
        text: '아이디 또는 비밀번호가 올바르지 않습니다',
        icon: 'error',
      });
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
            휴대폰 번호로 로그인 해주세요.
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
                  @click-event="${this.handleLogin}"
                ></common-button>
                <a href="">인증번호가 오지 않나요?</a> `
            : ''}
        </form>
      </div> `;
  }
}

customElements.define('login-page', Login);
