import { css } from 'lit';

export const BoardWithCSS = css`
  body {
    margin: 0;
  }
  back-component {
    position: fixed;
    top: 0;
    z-index: 2;
  }
  .all-button-container {
    display: flex;
    position: fixed;
    top: 40px;
    z-index: 2;
    margin-top: 1.25rem;
    margin-block-start: 1.25rem;
  }

  .all-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0.375rem;
    margin-right: 0.375rem;
    margin-inline: 0.375rem;

    & .all-button-category {
      background-color: var(--components--component-button);
      width: 3.375rem;
      height: 3.3125rem;
      text-align: center;
      border-radius: 50px;
    }

    & p {
      margin-top: 0.375rem;
      font-weight: 700;
      font-size: var(--label---small);
    }
  }

  .active > button {
    outline: 2px solid var(--secondary);
    outline-offset: -2px;
  }

  .active > p {
    color: var(--secondary);
  }

  .active > span {
    color: var(--secondary);
  }

  .main-button-container {
    display: flex;
    flex-direction: row;
    margin-top: 150px;
    position: sticky;
    top: 127px;
  }
  main-button {
    --button-padding: 24px;
    --button-height: 22px;
    margin-left: 0.2188rem;
    margin-right: 0.2188rem;
    margin-inline: 0.2188rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: var(--background);
    margin-bottom: 70px;
  }
  li {
    padding: 12px;

    list-style: none;
    border-bottom: 1px solid var(--contents--content-tertiary);
    cursor: pointer;
  }

  h3 {
    margin: 0;
  }

  .board-field-container {
    font-size: var(--paragraph---small);
  }

  .recruite {
    color: var(--secondary);
  }

  .title {
    font-size: var(--label---medium);
    margin: 8px 0px;
  }

  .participationTime {
    margin-top: 8px;
    display: flex;
    color: var(--contents--content-secondary);

    justify-content: space-between;
  }

  .participationTime .participation::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: var(--contents--content-secondary);
    padding-left: 16px;
    margin-right: 2px;
  }
`;
