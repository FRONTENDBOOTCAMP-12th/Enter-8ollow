import { css } from 'lit';

export const styles = css`
  #qnaContent {
    width: 100%;
    height: 160px;
    resize: none;
    padding: 12px 0px 104px;
    font-size: 14px;
    color: #919191;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    border: none;
  }

  .inactive {
    color: #9da1b4;
    cursor: not-allowed;
  }

  .active {
    color: #000000;
    cursor: pointer;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    white-space: nowrap;
  }
`;
