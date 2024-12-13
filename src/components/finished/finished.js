const qnaTitle = document.getElementById('qnaTitle');
const qnaContent = document.getElementById('qnaContent');
const completeButton = document.getElementById('completeButton');

function updateButtonState(state) {
  completeButton.classList.toggle('active', state);
  completeButton.classList.toggle('inactive', !state);
}

function isWritten() {
  if (qnaTitle.value !== '' && qnaContent.value !== '') {
    updateButtonState(true);
  } else if (qnaTitle.value === '' || qnaContent.value === '') {
    updateButtonState(false);
  }
}

qnaTitle.addEventListener('input', isWritten);
qnaContent.addEventListener('input', isWritten);
