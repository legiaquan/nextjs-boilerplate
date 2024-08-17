import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import {
  AppConfig,
  type LocaleEnum,
  LocaleProviderAnt,
} from '@/utils/AppConfig';
import GlobalStyle from '@/templates/GlobalStyle';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: LocaleEnum };
}

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  unstable_setRequestLocale(locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={locale}>
      <GlobalStyle>
        <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <AntdRegistry>
              <ConfigProvider locale={LocaleProviderAnt(locale)}>
                {children}
              </ConfigProvider>
            </AntdRegistry>
          </NextIntlClientProvider>
        </body>
      </GlobalStyle>
    </html>
  );
}
