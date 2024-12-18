// // 입력 확인 함수
// function buttonStyleChanger(isChanged) {
//   // Shadow DOM 내부 요소에 접근하기
//   const finishedComponent = document.querySelector('finished-component');

//   // Shadow DOM에 접근
//   const { shadowRoot } = finishedComponent;

//   // Shadow DOM 내부에서 특정 요소를 찾기
//   const innerElement = shadowRoot.querySelector('#completeButton'); // 예: id가 "completeButton"인 요소

//   // 텍스트 또는 스타일 변경
//   if (innerElement) {
//     if (isChanged) {
//       // 클래스 변경: 'inactive'에서 'active'로
//       innerElement.classList.remove('inactive');
//       innerElement.classList.add('active');
//     } else {
//       // 클래스 변경: 'active'에서 'inactive'로
//       innerElement.classList.remove('active');
//       innerElement.classList.add('inactive');
//     }
//   }
// }

// function checkInputs() {
//   const title = document.getElementById('qnaTitle').value;
//   const content = document.getElementById('qnaContent').value;

//   if (title !== '' && content !== '') {
//     buttonStyleChanger(true); // 버튼 스타일 변경
//   } else {
//     buttonStyleChanger(false); // 버튼 원래대로 복원
//   }
// }

// document.getElementById('qnaTitle').addEventListener('input', checkInputs());

// document.getElementById('qnaContent').addEventListener('input', checkInputs());
