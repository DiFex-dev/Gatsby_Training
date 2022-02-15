import { css } from '@emotion/react';

const styles = css`
  .welcomeScreen {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .container-todo {
    width: 100vw;
    height: 100vh;
    background-color: #f0e9c2;
    opacity: 0;

    &.active {
      opacity: 1;
      transition: all 2s ease;
    }
  }
`;

export default styles;
