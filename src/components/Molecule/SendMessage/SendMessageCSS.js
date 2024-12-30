import { css } from 'lit';

export const styles = css`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      all: unset;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      margin-inline: 0.5rem;
    }

    #message {
      background-color: #ebecf0;
      border: none;
      border-radius: 20px;
      width: 100%;
      height: 2.375rem;
      padding-left: 15px;
      padding-right: 15px;
      padding-inline: 15px;
      position: relative;

      &::placeholder {
        color: var(--contents--content-secondary);
      }
    }

    .smile {
      width: 1.125rem;
      height: 1.125rem;
      background-image: url('/src/assets/smile.png');
      background-size: contain;
      background-repeat: no-repeat;
      padding: 0.25rem;
      position: absolute;
      right: 50px;

      &:focus-visible {
        outline: solid 2px #5a85ee;
      }
    }
    .send {
      width: 1.125rem;
      height: 1.125rem;
      background-image: url('/src/assets/send.png');
      background-size: contain;
      background-repeat: no-repeat;

      padding: 0.25rem;

      &:focus-visible {
        outline: solid 2px #5a85ee;
      }
    }
  }
`;
