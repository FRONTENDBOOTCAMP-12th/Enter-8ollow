import { css } from 'lit';

export default css`
  .hidden {
    display: none;
  }

  /* 연관 글 섹션 컨테이너 스타일 */
  .related-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  .related-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .related-list {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(150px, 1fr)
    ); /* 반응형 그리드 */
    gap: 1.5rem;
  }

  .related-item {
    list-style: none;
    text-align: center;
  }

  .related-item a {
    text-decoration: none;
    color: inherit;
  }

  .related-item-image {
    width: 100%;
    height: 150px;
    background-color: #c4c4c4; /* 기본 회색 배경 */
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }

  .related-item-title {
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: bold;
  }

  .related-item-price {
    font-size: 0.9rem;
    color: #333;
  }

  .detail-container {
    margin-bottom: 2rem;
  }

  .details-container {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    font-size: 0.9rem;
    color: #6c757d;
    margin-bottom: 1rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .footer-left {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .liked_count {
    font-size: 0.9rem;
    color: #ff4500;
  }

  .price-container {
    font-size: 1.2rem;
    font-weight: bold;
    color: #28a745;
  }

  .chat-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  .chat-button.disabled {
    background-color: #6c757d;
    color: #ffffff;
    cursor: not-allowed;
  }

  .heart-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    fill: none;
    stroke: black;
  }

  .heart-icon.liked {
    fill: red;
    stroke: none;
  }

  .detail-image {
    width: 100%;
    height: 280px;
    object-fit: cover; /* 이미지 비율 유지하며 크기 조정 */
    object-position: center;
    border-radius: 8px;
    background-color: #c4c4c4;
  }

  .separator {
    width: 100%; /* 가로로 화면 전체를 채움 */
    height: 1px; /* 구분선의 두께 */
    background-color: #6c757d; /* 구분선 색상 */
    margin: 1rem 0; /* 위아래 여백 (필요 시 조정 가능) */
  }
`;
