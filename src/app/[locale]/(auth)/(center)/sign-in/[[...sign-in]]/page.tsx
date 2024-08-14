import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Login = () => {
  const t = useTranslations('SignUp');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t('title')}
    </main>
  );
};

export default Login;
