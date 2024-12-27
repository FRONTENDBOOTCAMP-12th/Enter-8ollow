import { css } from 'lit';

export default css`
  .detail-container {
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .detail-container figure img {
    width: 100%;
    border-radius: 8px;
  }

  .detail-content {
    margin-top: 1rem;
  }

  .detail-content h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .detail-content p {
    margin: 0.5rem 0;
  }

  .back-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
