import { css } from 'lit';

export const SearchActivitiesCSS = css`
  input-component {
  }

  .input-container {
    padding-left: 15px;
    padding-right: 15px;
    padding-inline: 15px;

    margin-bottom: 12px;
  }

  h2 {
    font-size: var(--label---small);
    margin-top: 12px;
    margin-bottom: 12px;
    margin-block: 12px;
  }

  section {
    padding-top: 4px;
    padding-left: 12px;
  }

  .button-container {
  }

  main-button {
    display: inline-block;
    padding: 0;
    padding-bottom: 11px;
  }

  common-button {
    position: fixed;
    bottom: 10%;
    width: 90%;
    left: 50%;
    transform: translate(-50%);
  }
`;
