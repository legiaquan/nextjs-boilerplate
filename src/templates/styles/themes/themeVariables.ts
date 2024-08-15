import { css } from 'styled-components';

import { colors, FONT_FAMILY } from '../libs/theme';
import type { ThemeType } from '../libs/theme.type';
import { antDarkColorsTheme, darkColorsTheme } from './dark/darkTheme';
import { lightColorsTheme } from './light/lightTheme';

export const themeObject = {
  light: lightColorsTheme,
  dark: darkColorsTheme,
};

export const antThemeObject = {
  light: {},
  dark: antDarkColorsTheme,
};

const getThemeVariables = (theme: ThemeType) => css`
  color-scheme: ${theme};
  --primary-color: ${themeObject[theme].primary};
  --info-color: var(--primary-color);
  --secondary-color: ${themeObject[theme].secondary};
  --error-color: ${themeObject[theme].error};
  --warning-color: ${themeObject[theme].warning};
  --success-color: ${themeObject[theme].success};
  --background-color: ${themeObject[theme].background};
`;

export const lightThemeVariables = css`
  ${getThemeVariables('light')}
`;

export const darkThemeVariables = css`
  ${getThemeVariables('dark')}
  --ant-success-color-deprecated-bg: ${antThemeObject.dark
    .successBg} !important;
  --ant-success-color-deprecated-border: ${antThemeObject.dark
    .successBorder} !important;
`;

export const commonThemeVariables = css`
  color-scheme: light dark;
  --white: ${colors.white};
  --black: ${colors.black};
  --green: ${colors.green};
  --orange: ${colors.orange};
  --gray: ${colors.gray};
  --lightgrey: ${colors.lightgrey};
  --violet: ${colors.violet};
  --lightgreen: ${colors.lightgreen};
  --pink: ${colors.pink};
  --blue: ${colors.blue};
  --skyblue: ${colors.skyblue};
  --red: ${colors.red};
  --font-family: ${FONT_FAMILY.main};
`;

export const antOverrideCssVariables = css``;
