export interface ITheme {
  primary: string;
  light: string;
  secondary: string;
  error: string;
  warning: string;
  success: string;
  background: string;
}

export declare const colors: {
  gray59: string;
  grayC4: string;
  black: string;
  white: string;
  gray: string;
  orange: string;
  blue: string;
  red: string;
  green: string;
  yellow: string;
  gradientBluePosition: string;
  gradientBlue: string;
  primary: string;
  primaryText: string;
  secondaryText: string;
  secondaryBackground: string;
  primaryGray: string;
  backgroundColor: string;
  lightgrey: string;
  violet: string;
  lightgreen: string;
  pink: string;
  skyblue: string;
};

export type LanguageType = 'de' | 'en';
export type ThemeType = 'light' | 'dark';
export declare const shadeColor: (color: string, percent: number) => string;
