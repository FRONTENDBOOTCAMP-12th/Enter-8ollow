import { css } from 'lit';

export const styles = css`
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding-bottom: 40px;
    padding-block-end: 40px;
  }

  .flex {
    display: flex;
    justify-content: space-around;
    margin-block: 18px;
    width: 100vw;
  }

  .header {
    display: flex;
    width: 100%;
  }

  .search {
    min-width: 254px;
    height: 29px;
    border: none;
    margin: 0px 0px 0px 4px;
  }

  .search:placeholder {
    color: --contents--content-secondary;
  }

  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--contents--content-secondary);
    margin-right: 20px;
    margin-inline-end: 20px;
  }

  .search-icon {
    width: 20px;
    height: 20px;
    margin: 4px 0px 7px 0px;
  }

  .title {
    width: 300px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin: 20px 0px 0px 0px;
    width: 300px;
    height: 100%;
  }

  .grid > :last-child {
    grid-column: span 2;
  }
`;
