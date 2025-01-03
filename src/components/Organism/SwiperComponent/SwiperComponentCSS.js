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

  .hero-container {
    width: inherit;
    background: linear-gradient(to bottom, #8d4209, #201101);
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .hero-container img {
    max-width: 400px;
    height: auto;
    width: auto;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    overflow: hidden;
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
