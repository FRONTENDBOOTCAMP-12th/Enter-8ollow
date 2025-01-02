import { css } from 'lit';

export const WithWhoCSS = css`
  h1 {
    font-size: var(--label---large);
    padding-left: 1.6875rem;
    padding-bottom: 0.75rem;
    margin: 0;
  }

  .gender-container {
    display: grid;
  }
  .gender-label {
    padding: 12px;

    grid-column: 1 / span 1;
  }
  .gender-label::before {
    content: '';

    padding-right: 20px;
    background-color: red;

    background-size: cover;
    background-position: center;

    background-color: var(--black);
    mask: url('/sex.svg') no-repeat center;
  }

  .gender-input {
    display: grid;

    padding: 0.75rem;

    border: 0;

    grid-column: 2 / span 1;

    justify-self: end;
    width: 60%;
  }

  span {
    display: block;
    color: var(--contents--content-tertiary);
    margin-left: 0.75rem;
    margin-top: 0.75rem;
    font-size: var(--paragraph---small);
  }

  .button-container {
    display: flex;
    margin-top: 0.5rem;
    margin-left: 0.75rem;
    margin-bottom: 12px;
  }

  .age-container,
  .approve-container {
    display: grid;
  }
  .age-label,
  .approve-label {
    padding: 12px;

    grid-column: 1 / span 1;
  }
  .age-label::before {
    content: '';

    padding-right: 20px;
    background-color: red;

    background-size: cover;
    background-position: center;

    background-color: var(--black);
    mask: url('/people.svg') no-repeat center;
  }

  .age-input {
    display: grid;

    padding: 0.75rem;

    border: 0;

    grid-column: 2 / span 1;

    justify-self: end;
    width: 60%;
  }

  .approve-label::before {
    content: '';

    padding-right: 20px;
    background-color: red;

    background-size: cover;
    background-position: center;

    background-color: var(--black);
    mask: url('/password.svg') no-repeat center;
  }

  .approve-input {
    display: grid;

    padding: 1.5rem;

    border: 0;

    grid-column: 2 / span 1;

    justify-self: end;
    width: 100%;

    width: 100px;
    height: 50px;

    overflow: hidden;
    z-index: 1;

    position: absolute;
    left: 70%;
    opacity: 0%;
  }
  .approve-switch {
    position: absolute;
    left: 70%;

    padding-left: 70px;
    line-height: 30px;
    font-size: 16px;
  }
  .approve-switch::after {
    position: absolute;
    top: -4px;
    left: 4px;
    content: '';
    width: 24px;
    height: 24px;
    background: var(--white);
    border-radius: 100%;
    transition: all 0.3s;
  }
  .approve-switch::before {
    position: absolute;
    top: -7px;
    left: 0;
    content: '';
    width: 60px;
    height: 30px;
    border: 1px solid #d1d1d1;
    border-radius: 20px;
    background: var(--contents--content-tertiary);
    box-sizing: border-box;
  }
  .approve-input:checked + .approve-switch::after {
    transform: translateX(28px);
  }
  .approve-input:checked + .approve-switch::before {
    background: var(--secondary);
  }

  common-button {
    position: fixed;

    bottom: 10%;
    width: 90%;
    left: 50%;
    transform: translate(-50%);
  }

  .category {
    all: unset;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .category {
    background-color: var(--white);
    height: var(--button-height, 27px);
    padding-left: var(--button-padding, 8px);
    padding-right: var(--button-padding, 8px);
    padding-inline: var(--button-padding, 8px);
    margin-right: 2px;

    padding-top: 4px;
    padding-bottom: 4px;
    padding-block: 4px;
    border-radius: var(--border-radius---large);
    border: 2px solid var(--contents--content-tertiary);
    white-space: nowrap;

    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 1.25rem;
      height: 1.25rem;
      padding: 0.25rem;
    }

    & svg {
      width: 1.25rem;
      height: 1.25rem;
      padding: 0.25rem;
    }

    & span {
      margin: 0;
      margin-bottom: 0.125rem;
      font-size: var(--paragraph---small);
    }
  }

  .checked {
    background-color: var(--primary);
    border: 2px solid var(--primary);

    & span {
      color: var(--white);
    }

    & svg path {
      stroke: white;
    }
  }

  .hidden {
    display: none;
  }
`;
