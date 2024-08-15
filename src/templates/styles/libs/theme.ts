const getMedia = (breakpoint: number): string => `(min-width: ${breakpoint}px)`;

export const colors = {
  gray59: '#595959',
  grayC4: '#C4C4C4',
  black: '#000000',
  white: '#ffffff',
  gray: 'gray',
  orange: 'orange',
  blue: 'blue',
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  gradientBluePosition: 'rgba(0,165,255,0.1)',
  gradientBlue: 'rgba(0,165,255)',
  primary: '#002244',
  primaryText: '#002244',
  secondaryText: '#216AE2',
  secondaryBackground: '#EFF6FF',
  primaryGray: '#B0BAC5',
  backgroundColor: '#F6F6F6',
  lightgrey: '#c5d3e0',
  violet: '#ee82ee',
  lightgreen: '#89dca0',
  pink: '#ffc0cb',
  skyblue: '#35a0dc',
};

export const radius: number[] = [0, 4, 6, 8, 10, 12, 16, 24];
export const spacing: number[] = [0, 4, 8, 12, 16, 24, 32, 48, 56, 64];

export const BORDER_RADIUS = '7px';

export const LAYOUT = {
  mobile: {
    paddingVertical: '0.5rem',
    paddingHorizontal: '1.25rem',
    headerHeight: '4rem',
    headerPadding: '0.75rem',
  },
  desktop: {
    paddingVertical: '0.5rem',
    paddingHorizontal: '1.25rem',
    headerHeight: '4rem',
    headerPadding: '0.75rem',
  },
};

export const FONT_FAMILY = {
  main: 'Inter',
};

export const FONT_SIZE = {
  xxxs: '0.625rem',
  xxs: '0.75rem',
  xs: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '1.625rem',
  xxxxl: '2rem',
};

export const PADDING: Record<string, string> = {
  ...FONT_SIZE,
};

export const FONT_WEIGHT = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

export const BREAKPOINTS = {
  xs: 360,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1920,
};

export const media = {
  xs: getMedia(BREAKPOINTS.xs),
  sm: getMedia(BREAKPOINTS.sm),
  md: getMedia(BREAKPOINTS.md),
  lg: getMedia(BREAKPOINTS.lg),
  xl: getMedia(BREAKPOINTS.xl),
  xxl: getMedia(BREAKPOINTS.xxl),
};

export const defaultPaddings = {
  mobile: [30, 16],
  tablet: [40, 30],
  desktop: [50, 60],
};

export const modalSizes = {
  small: '400px',
  medium: '600px',
  large: '800px',
};
