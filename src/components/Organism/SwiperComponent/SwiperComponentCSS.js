import { css } from 'lit';

export const SwiperSlide = css`
  swiper-slide {
    position: relative;
    width: 100%;
    height: 11.875rem;
    background-color: var(--contents--content-tertiary);
  }

  .text-container {
    position: absolute;
    left: 20px;
    text-align: left;
  }

  .title {
    font-size: var(--label---large);
    color: var(--background);
  }

  .description {
    font-size: var(--paragraph---small);
    color: var(--background);
    padding: 0;
  }

  .image-container {
    float: right;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .page2 {
    width: 100%;
    background-color: var(--contents--content-tertiary);
    padding-top: 20px;
    padding-block-start: 20px;

    .text-container {
      position: absolute;
      left: 20px;
      text-align: left;
    }

    .title {
      font-size: var(--label---large);
      color: var(--background);
    }

    .description {
      font-size: var(--paragraph---small);
      color: var(--background);
      padding: 0;
    }

    .image-container {
      float: right;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    white-space: nowrap;
  }
`;
