'use client';

import type { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';

import { resetCss } from './resetCss';
import {
  antOverrideCssVariables,
  commonThemeVariables,
  darkThemeVariables,
  lightThemeVariables,
} from './themes/themeVariables';

const GlobalStyle = createGlobalStyle`
  :root {
    ${commonThemeVariables};
    ${antOverrideCssVariables};
  }

  ${resetCss}

  [data-theme='light'],
  :root {
    ${lightThemeVariables}
  }

  [data-theme='dark'] {
    ${darkThemeVariables}
  }

  [data-no-transition] * {
    transition: none !important;
  }
`;

export default function GlobalStyleProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
