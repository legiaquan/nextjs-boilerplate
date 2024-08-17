import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for Your Next.js Project with Tailwind CSS
      </h2>
      <p className="text-base">
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Next.js Boilerplate is a developer-friendly starter code for Next.js
        projects, built with Tailwind CSS, and TypeScript.{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with developer experience first: Next.js, TypeScript, ESLint,
        Prettier, Husky, Lint-Staged, Jest (replaced by Vitest), Testing
        Library, Commitlint, VSCode, PostCSS, Tailwind CSS, Authentication with{' '}
        , Multi-language (i18n), and more.
      </p>
    </>
  );
}
