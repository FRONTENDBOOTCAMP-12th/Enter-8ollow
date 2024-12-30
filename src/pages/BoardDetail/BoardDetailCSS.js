import { css } from 'lit';

export const styles = css`
  .detail-container {
    padding: 20px;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .update {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .story-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .story-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  h2 {
    font-size: var(--heading---medium);
    color: var(--contents--content-primary);
  }

  .author {
    font-size: var(--paragraph---small);
    color: var(--contents--content-secondary);
  }
`;
