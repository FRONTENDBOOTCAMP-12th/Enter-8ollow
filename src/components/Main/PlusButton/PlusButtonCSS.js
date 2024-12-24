import { css } from 'lit';

export default css`
  /* 플러스 버튼 스타일 */
  .plus-button {
    /* 기본 설정 */
    display: flex;
    align-items: center;
    justify-content: center;

    /* 크기와 배경 */
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    background-color: var(--primary, #373f67);
    color: white;
    font-size: 2rem;

    /* 그림자와 클릭 효과 */
    box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;

    /* 위치 설정 */
    position: fixed;
    bottom: 20vh;
    right: 5vw;
    z-index: 1010;
    margin-bottom: 12px; /* 버튼 아래 간격 */

    /* 전환 효과 */
    transition:
      background-color 0.3s,
      color 0.3s,
      box-shadow 0.2s;
  }

  /* 플러스 버튼 활성화 상태 */
  .plus-button[aria-pressed='true'] {
    background-color: var(--white, #ffffff);
    color: var(--black, #000000);
  }

  /* 플러스 버튼 포커스 상태 */
  .plus-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--tertiary, #719cf7);
  }

  /* 교환 버튼 리스트 스타일 */
  .exchange-button-list {
    /* 기본 설정 */
    display: none;
    position: fixed;
    bottom: calc(20vh + 4rem); /* 버튼 기준 위로 이동 */
    right: 5vw;
    z-index: 1005;

    /* 리스트 보이기 */
    &.visible {
      display: block;
    }

    /* 리스트 항목 스타일 */
    li {
      list-style: none;

      a {
        /* 기본 설정 */
        display: flex;
        align-items: center;
        justify-content: center;

        /* 크기와 배경 */
        width: 108px;
        height: 41px;
        background: var(--primary, #373f67);
        color: var(--white, #ffffff);
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: none;
        border-radius: 12px;

        /* 그림자와 간격 */
        margin-bottom: 4px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

        /* 전환 효과 */
        transition:
          background-color 0.3s,
          transform 0.2s;
      }

      /* 리스트 항목 포커스 상태 */
      a:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px var(--tertiary, #719cf7);
      }

      /* 리스트 항목 호버 상태 */
      a:hover {
        background-color: var(--secondary, #5a85ee);
        transform: translateY(-2px);
      }
    }
  }
`;
