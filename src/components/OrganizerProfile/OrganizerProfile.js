// function fetchUserProfile() {
//   fetch('#') // #: 서버 API 엔드포인트 URL
//     .then((response) => response.json())
//     .then((data) => {
//       if (
//         data &&
//         data.nickname &&
//         data.location &&
//         data.authCount &&
//         data.lastSeen
//       ) {
//         document.getElementById('nickname').textContent = data.nickname;
//         document.getElementById('location').textContent = data.location;
//         document.getElementById('authCount').textContent = data.authCount;
//         document.getElementById('lastSeen').textContent = data.lastSeen;
//       } else {
//         console.error('잘못된 데이터 형식 반환');
//       }
//     })
//     .catch((error) => {
//       console.error('데이터 로드 중 오류:', error.message);
//     });
// }

// window.onload = fetchUserProfile;
