// eslint-disable-next-line import/no-extraneous-dependencies
import withBundleAnalyzer from '@next/bundle-analyzer';
// eslint-disable-next-line import/no-unresolved
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    compiler: {
      styledComponents: true,
    },
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
      serverComponentsExternalPackages: ['@electric-sql/pglite'],
    },
    images: {
      domains: ['s3-ap-northeast-1.amazonaws.com'],
    },
  }),
);
