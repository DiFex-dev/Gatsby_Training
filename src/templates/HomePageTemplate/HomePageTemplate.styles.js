import { css } from '@emotion/react';

const styles = css`
  .welcomeScreen {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    animation: hide 2.9s linear;
  }

  @keyframes hide {
    0% {
      opacity: 0;
    }

    25% {
      opacity: 0.5;
    }

    50% {
      opacity: 1;
    }

    75% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
    }
  }
`;

export default styles;
