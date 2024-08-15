'use client';

import { useLocale } from 'next-intl';
import type { ChangeEventHandler } from 'react';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import type { LocaleEnum } from '@/utils/AppConfig';
import { AppConfig } from '@/utils/AppConfig';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(pathname, { locale: event.target.value as LocaleEnum });
    router.refresh();
  };

  return (
    <select
      id="locale" // Ensure this id matches the htmlFor in the label
      name="locale"
      defaultValue={locale}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-none focus-visible:ring"
    >
      {AppConfig.locales.map((elt) => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
