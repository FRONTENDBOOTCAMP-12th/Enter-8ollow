import { css } from 'lit';

export default css`
  .container {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px;
  }

  .title {
    font-size: var(--paragraph---medium);
    font-weight: 600;
    color: var(--black, #000000);
    white-space: nowrap;
  }

  .description,
  .footer {
    color: var(--components--component-person);
    font-size: var(--paragraph---small);
    margin-bottom: 0px;
    margin-block-end: 0px;
  }

  li {
    list-style-type: none;
  }

  button {
    all: unset;
  }
`;
