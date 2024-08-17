import { css } from 'styled-components';

export const resetCss = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* font-size: 62.5%; */
  }

  body {
    font-family: var(--font-family);
    font-size: 1rem;
    line-height: 1.5;
    text-rendering: optimizespeed;
    /* height: 200vh; */
    overflow-y: overlay;
  }

  // Scrollbar CSS
  html *::-webkit-scrollbar {
    border-radius: 0;
    width: 8px;
  }

  html *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(22, 24, 35, 0.06);
  }

  html *::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0);
  }

  button,
  input,
  [tabindex] {
    outline: none;
    border: none;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  // Fonts embedded
`;
