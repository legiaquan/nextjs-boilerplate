import type { LocaleEnum } from '@/utils/AppConfig';

export interface UseLocaleSwitcherProps {
  onLocaleChange?: (newLocale: LocaleEnum) => void;
}
