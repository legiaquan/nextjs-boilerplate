import enUS from 'antd/lib/locale/en_US';
import jaJP from 'antd/lib/locale/ja_JP';
import viVN from 'antd/lib/locale/vi_VN';
import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

export enum LocaleEnum {
  vi = 'vi',
  en = 'en',
  ja = 'ja',
}

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: [LocaleEnum.en, LocaleEnum.vi, LocaleEnum.ja],
  defaultLocale: LocaleEnum.en,
  localePrefix,
};

export const LocaleProviderAnt = (locale: LocaleEnum) => {
  switch (locale) {
    case LocaleEnum.en:
      return enUS;
    case LocaleEnum.ja:
      return jaJP;
    default:
      return viVN;
  }
};
