import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';

type IPortfolioDetailProps = {
  params: { slug: string; locale: string };
};

export function generateStaticParams() {
  return AppConfig.locales
    .map((locale) =>
      Array.from(Array(6).keys()).map((elt) => ({
        slug: `${elt}`,
        locale,
      })),
    )
    .flat(1);
}

export async function generateMetadata(props: IPortfolioDetailProps) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'PortfolioSlug',
  });

  return {
    title: t('meta_title', { slug: props.params.slug }),
    description: t('meta_description', { slug: props.params.slug }),
  };
}

const PortfolioDetail = (props: IPortfolioDetailProps) => {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('PortfolioSlug');

  return (
    <>
      <h1 className="capitalize">{t('header', { slug: props.params.slug })}</h1>
      <p>{t('content')}</p>
    </>
  );
};

export const dynamicParams = false;

export default PortfolioDetail;
