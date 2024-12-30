import { css } from 'lit';

export const styles = css`
  .story-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  .app {
    display: flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: var(--primary);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
