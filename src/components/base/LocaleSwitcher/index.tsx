'use client';

import { GlobalOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import type { LocaleEnum } from '@/utils/AppConfig';
import { AppConfig } from '@/utils/AppConfig';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleMenuClick = ({ key }: { key: string }): void => {
    const newLocale = key as LocaleEnum; // Cast key to LocaleEnum
    router.push(pathname, { locale: newLocale });
    router.refresh();
  };

  const items: MenuProps['items'] = AppConfig.locales.map((elt) => ({
    key: elt,
    label: elt.toUpperCase(),
  }));

  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['click']}>
      <Button icon={<GlobalOutlined />} className="flex items-center">
        {locale.toUpperCase()}
      </Button>
    </Dropdown>
  );
}
