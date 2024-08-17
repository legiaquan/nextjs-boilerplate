import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import type { LocaleEnum } from '@/utils/AppConfig';
import { AppConfig } from '@/utils/AppConfig';

export default getRequestConfig(async ({ locale }) => {
  const localeValue = locale as LocaleEnum;

  if (!AppConfig.locales.includes(localeValue)) notFound();

  const timeZone = AppConfig.timeZoneMap[localeValue] || 'UTC';

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
    timeZone,
  };
});
