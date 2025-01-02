import { css } from 'lit';

export default css`
  .list-item {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 12px;
    padding: 0px 12px 5px 12px;
    border-bottom: 1px solid var(--contents--content-secondary, #919191);
    margin: 0;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  .item-img-container {
    width: 90px;
    height: 90px;
    overflow: hidden;
    background: var(--contents--content-secondary, #919191);
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  ul {
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 25px 0 0 0;
    line-height: 160%;
    font-size: var(--paragraph---medium, 1rem);
    font-weight: 400;
  }

  .title {
    color: var(--contents--content-primary);
  }

  .subtitle {
    font-size: var(--paragraph---small);
    color: var(--Contents-contentTertiary, #9da1b4);
  }

  .status-price-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .status {
    border-radius: 4px;
    color: var(--white, #ffffff);
    display: inline-block;
    font-size: var(--paragraph---small);
    padding: 1px 4px;
  }

  .status.hidden {
    display: none;
  }

  .status.reserved {
    background-color: var(--tertiary, #719cf7);
  }

  .status.complete {
    background-color: var(--contents--content-tertiary, #9da1b4);
  }

  .price {
    font-weight: 600;
    color: var(--black, #000000);
  }

  .like-button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 0.75rem;
    color: var(--contents--content-primary, #000000);
    gap: 2px;
    margin: 0;
  }
`;
