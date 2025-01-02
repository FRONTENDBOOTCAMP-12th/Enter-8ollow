import { css } from 'lit';

export const WriteActivitiesCSS = css`
  h1 {
    font-size: var(--label---large);
    padding-left: 1.6875rem;
    padding-bottom: 0.75rem;
    margin: 0;
  }
  .with-post-form {
    width: 100%;
  }
  .category-container {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-block: 1rem;
    display: grid;
  }
  .category {
    margin-inline: 0;
    padding-inline-start: 12px;
    order: 1;
    grid-column: 1 / span 2;
  }
  .category-list {
    background-color: var(--background);
    list-style: none;
    padding-left: 15px;
    order: 3;
    grid-column: 1 / span 3;
    display: none;

    padding-top: 4px;
    padding-bottom: 4px;

    & li {
      margin: 0;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-block: 10px;
      color: var(--contents--content-tertiary);
      cursor: pointer;
    }

    & .checked {
      color: var(--black);
    }
  }

  .show {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .category-open {
    display: grid;
    order: 2;
    grid-column: 3 / span 1;

    width: 11px;
    height: 11px;
    background-image: url('/src/assets/common/direction/down.svg');
    background-size: cover;
    background-position: center;

    justify-self: center;
  }
  button {
    all: unset;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .activity-content {
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-inline: 0.75rem;
    padding-top: 16px;
    padding-bottom: 24px;
    border-style: none;
    border-top: 1px solid var(--components--component-lightgray);
    border-bottom: 1px solid var(--components--component-lightgray);
  }

  .participation {
    display: grid;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-block: 0.75rem;
  }
  .participation-number {
    padding: 12px;

    grid-column: 1 / span 1;
  }
  .participation-number::before {
    content: '';

    padding-right: 20px;
    background-color: red;

    background-size: cover;
    background-position: center;

    background-color: var(--black);
    mask: url('/src/assets/board/people.svg') no-repeat center;
  }

  .participation-container {
    display: grid;

    padding: 12px;

    grid-column: 2 / span 1;
    grid-template-columns: repeat(3, auto);
    justify-content: end;
  }

  .decrease {
    width: 16px;
    height: 16px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 50px;
    text-align: center;

    line-height: 16px;
    position: relative;
    margin-right: 16px;
  }

  .increase {
    width: 16px;
    height: 16px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 50px;
    text-align: center;

    line-height: 16px;
    position: relative;
    margin-left: 16px;
  }

  .decrease:before {
    content: '-';
    position: absolute;
    font-size: var(--heading---x-x-l);

    top: 19%; /* 세로 중앙 */
    left: 50%; /* 가로 중앙 */
    transform: translate(-50%, -50%); /* 중앙으로 이동 */
  }

  .increase:before {
    content: '+';
    position: absolute;
    font-size: 1.5rem;

    top: 30%; /* 세로 중앙 */
    left: 50%; /* 가로 중앙 */
    transform: translate(-50%, -50%); /* 중앙으로 이동 */
  }
  .date-container {
    display: grid;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-block: 0.75rem;
  }
  .date {
    padding: 12px;

    grid-column: 1 / span 1;
  }
  .date::before {
    content: '';

    padding-right: 20px;
    background-color: red;

    background-size: cover;
    background-position: center;

    background-color: var(--black);
    mask: url('/src/assets/board/calender.svg') no-repeat center;
  }

  .date-input {
    grid-column: 2 / span 1;
    width: 50%;
    justify-self: end;
    border: 0;
  }

  .time-container {
    display: grid;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-block: 0.75rem;
  }
  .time {
    padding: 12px;

    grid-column: 1 / span 1;
  }
  .time::before {
    content: '';

    padding-right: 20px;
    background-color: red;

    background-size: cover;
    background-position: center;

    background-color: var(--black);
    mask: url('/src/assets/board/time.svg') no-repeat center;
  }

  .time-input {
    grid-column: 2 / span 1;
    width: 50%;
    justify-self: end;
    border: 0;
  }

  .place-container {
    display: grid;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-block: 0.75rem;
  }
  .place {
    padding: 12px;

    grid-column: 1 / span 1;
  }
  .place::before {
    content: '';

    padding-right: 20px;
    background-color: red;

    background-size: cover;
    background-position: center;

    background-color: var(--black);
    mask: url('/src/assets/map.svg') no-repeat center;
  }

  .place-input {
    grid-column: 2 / span 1;
    width: 40%;
    justify-self: end;
    border: 0;
  }

  common-button {
    position: fixed;

    bottom: 10%;
    width: 90%;
    left: 50%;
    transform: translate(-50%);
  }
`;
