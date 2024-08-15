import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

export default createMiddleware({
  // A list of all locales that are supported
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  // Used when no locale matches
  defaultLocale: AppConfig.defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `'/(${AppConfig.locales.join('|')})/:path*'`],
};
