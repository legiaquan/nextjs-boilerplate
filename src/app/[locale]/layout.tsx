import '../globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import GlobalStyle from '@/templates/styles/GlobalStyle';
import type { LocaleEnum } from '@/utils/AppConfig';
import { AppConfig, LocaleProviderAnt } from '@/utils/AppConfig';

// Define the type for the props
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: LocaleEnum };
}

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

// Can be imported from a shared config

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  unstable_setRequestLocale(locale);
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(locale)) {
    notFound();
  }
  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <GlobalStyle>
          <body>
            <AntdRegistry>
              <ConfigProvider locale={LocaleProviderAnt(locale)}>
                {children}
              </ConfigProvider>
            </AntdRegistry>
          </body>
        </GlobalStyle>
      </NextIntlClientProvider>
    </html>
  );
}
