import { css } from 'lit';

export default css`
  .hidden {
    display: none;
  }

  .related-section {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }

  /* 이 글과 함께 봤어요 */
  .related-title {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---large, 1.33rem;);
    font-weight: 600;

    padding-left: 12px;
  }

  /* 연관 글 목록 */
  .related-list {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(150px, 1fr)
    ); /* 반응형 그리드 */
    gap: 16px;
    padding: 0 14px 0 14px; /* 위, 오른쪽, 아래, 왼쪽  */
    margin-bottom: 75px;
  }

  .related-item {
    list-style: none;
    text-align: left;

    a {
      text-decoration: none;
    }
  }

  .related-item-image {
    background: var(--Contents-contentSecondary, #919191);
    border-radius: 8px;
    object-fit: cover;
    object-position: right;

    width: 100%;
    height: auto; /* 이미지 높이를 자동으로 조정 */
    aspect-ratio: 16 / 9; /* 가로 세로 비율 유지 */
    object-fit: cover;
  }

  .related-item-title {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---medium, 1rem);
    margin: 0;
    font-weight: 400;
    line-height: 160%;
    text-align: left; /* 텍스트를 왼쪽 정렬 */
    padding-top: 12px;
  }

  .related-item-price {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---medium, 1rem);
    padding-bottom: 20px;
    font-weight: 600;
  }

  .detail-container {
    margin: 0px;
    padding: 12px;
  }

  .details-container {
    display: flex;
    justify-content: flex-start;

    font-size: var(--paragraph---medium, 1rem);
    color: var(--Contents-contentSecondary, #919191);
    margin-bottom: 1rem;
  }

  .author {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---medium, 1rem);
    font-weight: 600;
  }

  .current-temp {
    color: var(--secondary, #5a85ee);
    font-size: var(--label---medium, 1rem);
    font-weight: 600;
  }

  .post-title {
    color: var(--Contents-contentPrimary, #000);
    font-weight: 600;
    font-size: var(--label---x-l, 1.78rem);
  }
  .description {
    color: var(--Contents-contentPrimary, #000);
    font-size: var(--label---medium, 1rem);
    font-weight: 400;
    line-height: 160%;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 12px;
    border-bottom: 1px solid var(--contents--content-secondary, #919191); /* 아래쪽에 1px 검정 라인 추가 */
  }

  .footer-left {
    display: flex;
    gap: 25px;
    align-items: center;
  }

  .price-footer {
    font-size: var(--label---large, 1.33rem);
    font-weight: 600;
    color: var(--Contents-contentPrimary, #000);
  }

  .price-proposal {
    color: var(--secondary, #5a85ee);
    font-weight: 600;
  }

  .chat-button {
    background-color: var(--secondary, #5a85ee);
    color: var(--background, #fff);
    border: none;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: var(--label---large, 1.33rem);
    font-weight: 600;
    cursor: pointer;
  }

  .chat-button.disabled {
    background-color: var(--contents--content-tertiary, #9da1b4);
    color: var(--white, #ffffff);
    cursor: not-allowed;
  }

  #interest-btn {
    all: unset;
    display: inline-block;
    cursor: pointer;
  }

  .heart-icon {
    width: 20px;
    height: 20px;
    display: block;
  }

  .detail-image {
    background: var(--Contents-contentSecondary, #919191);
    width: 100%;
    height: 26.3vh;
    object-fit: cover;
    margin: 0px;
    padding: 0px;
  }

  .separator {
    width: 100%;
    height: 1px;
    background-color: #6c757d; /* 구분선 색상 */
    margin: 1rem 0; /* 위아래 여백 (필요 시 조정 가능) */
  }
`;
