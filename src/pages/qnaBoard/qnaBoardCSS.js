import { css } from 'lit';

export const styles = css`
  .organizer-profile {
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 16.8px;
    color: #000;
  }

  .article-image{
    width : 294px;
    height : 367px;
    border-radius: 8px;
  }
  
  .organizer-profile .ddd,
  .organizer-profile .created {
    color: #9da1b4;
  }

  .field h2 {
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 18.66px;
  }

  .field h2 .question {
    color: #5a85ee;
  }

  .field p {
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  .story-image {
    width: 294px;
    height: 367px;
    border-radius: 8px;
  }

  .comment-input {
    box-sizing: border-box;
    width: calc(100% - 100px);
    height: 38px;
    padding: 8px 12px;
    background-color: #ebecf0;
    border: none;
    border-radius: 20px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #9da1b4;
  }

  .comment-submit {
    box-sizing: border-box;
    width: 100px;
    border: 0;
    background-color: transparent;
    color: #9da1b4;
  }

  .no-comments {
    padding-top: 60px;
    color: #9da1b4;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }
`;
