import { css } from 'lit';

export default css`
  /* 게시글 Detail Container */

  .detail-container {
    margin: 0 15px 15px 15px;
    padding: 0px;
  }

  p {
    margin: 0px;
  }

  .detail-image {
    background: var(--Contents-contentSecondary, #919191);
    width: 100%;
    height: auto;
    object-fit: contain; /* 이미지를 컨테이너에 맞춤 */
    margin: 0;

    margin: 0px 0px 10px 0px; /* 아래쪽 여백 추가 */
    padding: 0px;
  }

  /* 게시글 작성자 프로필 */
  .profile-container {
    display: flex;
    justify-content: space-between; /* 좌우로 요소 분리 */
    align-items: center; /* 세로 정렬 */
    margin: 12px 0;
    padding: 0;
  }

  .profile-info {
    display: flex;
    align-items: center; /* 세로 정렬 */
    gap: 15px; /* 이미지와 텍스트 간 간격 */
  }

  .profile-image {
    width: 40px;
    height: 40px;
    border-radius: 50%; /* 원형으로 만들기 */
    background: var(--Contents-contentSecondary, #919191);
    object-fit: cover;
  }

  .profile-text {
    display: flex;
    flex-direction: column; /* 닉네임과 지역을 세로로 배치 */
    gap: 4px; /* 텍스트 간 간격 */
  }

  .profile-author {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---medium, 1rem);
    font-weight: 600;
    margin: 0;
  }

  .profile-region {
    color: var(--Contents-contentSecondary, #919191);
    font-size: var(--label---medium, 1rem);
    margin: 0;
  }

  .profile-temp {
    text-align: right; /* 텍스트를 오른쪽 정렬 */
    display: flex;
    flex-direction: column; /* 세로로 배치 */
    gap: 4px; /* 두 요소 간의 간격 */
  }

  .current-temp {
    color: var(--secondary, #5a85ee);
    font-size: var(--label---medium, 1rem);
    font-weight: 600;
  }

  .manner-label {
    color: var(--Contents-contentSecondary, #919191);
    font-size: var(--label---medium, 1rem);
  }

  /* Post Details Section */
  .post-details {
    margin-top: 12px;
    font-size: var(--label---large, 1.33rem);
    color: var(--Contents-contentSecondary, #919191);
  }

  .post-title {
    color: var(--Contents-contentPrimary, #000);
    font-weight: 600;
    font-size: var(--label---large, 1.33rem);
    margin-bottom: 4px; /* 제목과 메타 정보 간 간격 */
  }

  .post-meta {
    display: flex;
    gap: 4px; /* 카테고리와 등록일 사이의 간격을 조정 */
    align-items: center; /* 세로 중앙 정렬 */
    font-size: var(--paragraph--underline, 0.71rem);
  }

  .post-category {
    color: var(--Contents-contentSecondary, #919191);
    font-size: var(--label---medium, 1rem);
    margin: 0;
  }

  .post-created {
    color: var(--Contents-contentSecondary, #919191);
    font-size: var(--label---medium, 1rem);
    margin: 0;
  }

  .post-description {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---medium, 1rem);
    font-weight: 400;
    line-height: 230%;
    margin: 16px 0;
  }

  /* Footer Section */
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    padding: 12px;
  }

  .footer-left {
    display: flex;
    gap: 25px;
    align-items: center;
  }

  .footer-btn {
    all: unset;
    display: inline-block;
    cursor: pointer;
  }

  .footer-price {
    font-size: var(--label---medium, 1rem);
    font-weight: 600;
    color: var(--Contents-contentPrimary, #000);
  }

  .footer-price-proposal {
    color: var(--secondary, #5a85ee);
    font-weight: 600;
    margin-top: 5px;
  }

  .chat-button {
    background-color: var(--secondary, #5a85ee);
    color: var(--background, #fff);
    border: none;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: var(--label---medium, 1rem);
    font-weight: 600;
    cursor: pointer;
  }

  .chat-button.disabled {
    background-color: var(--contents--content-tertiary, #9da1b4);
    color: var(--white, #ffffff);
    cursor: not-allowed;
  }

  .heart-icon {
    width: 20px;
    height: 20px;
    display: block;
  }

  /* 연관글 목록 - Related container */
  .related-container {
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 10px;
  }

  .related-title {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---large, 1.33rem;);
    font-weight: 600;
    padding-left: 12px;
  }

  .related-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
    padding: 0 14px 0 14px;
    margin-bottom: 75px;
  }

  .related-item {
    list-style: none;
    text-align: left;
  }

  .related-item a {
    text-decoration: none;
  }

  .related-item-image {
    background: var(--Contents-contentSecondary, #919191);
    border-radius: 8px;
    object-fit: cover;
    object-position: right;
    width: 100%;
    height: auto; /* 이미지 높이를 자동으로 조정 */
    aspect-ratio: 16 / 9; /* 가로 세로 비율 유지 */
  }

  .related-item-title {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---medium, 1rem);
    margin: 0;
    font-weight: 400;
    line-height: 160%;
    text-align: left;
    padding-top: 12px;
  }

  .related-item-price {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---medium, 1rem);
    padding-bottom: 20px;
    font-weight: 600;
  }

  .separator {
    width: 100%;
    height: 1px;
    background-color: var(--contents--content-secondary, #919191);
    margin: 0; /* 위아래 여백 (필요 시 조정 가능) */
  }
`;
