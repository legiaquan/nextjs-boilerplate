import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfigs';

export default createMiddleware({
  // A list of all locales that are supported
  locales: AppConfig.locales,

  // Used when no locale matches
  defaultLocale: AppConfig.defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(vi|en|ja)/:path*'],
};