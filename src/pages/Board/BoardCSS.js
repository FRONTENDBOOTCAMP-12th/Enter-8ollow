import { css } from 'lit';

export const BoardCSS = css`
  .main-button-container {
    display: grid;

    grid-template-columns: repeat(5, auto);
    justify-content: start;
    gap: 2px;

    padding-bottom: 0.5rem;

    padding-left: 0.3125rem;
    padding-right: 0.3125rem;
    padding-inline: 0.3125rem;
    padding-top: 1.25rem;

    position: sticky;
    top: 0;
    z-index: 2;

    background-color: var(--white);
    border-bottom: 1px solid var(--contents--content-secondary);
  }

  .board-field-container .board-field {
    border: 1px solid var(--contents--content-secondary);
  }

  ul {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 70px;

    overflow-y: auto;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
    border-bottom: 1px solid var(--contents--content-secondary);
    cursor: pointer;
  }

  board-field {
    position: relative;
    z-index: 1; /* modal-overlay 뒤에 오도록 설정 */
  }

  region-menu {
    position: relative;
    z-index: 10000;
  }

  base-header {
    position: relative;
    z-index: 9999;
  }

  board-theme-list {
    position: fixed;

    width: 100%;

    z-index: 1;
    bottom: 68px;
  }

  .hidden {
    display: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
