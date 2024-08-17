import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'UserProfile',
  });

  return {
    title: t('meta_title'),
  };
}

const UserProfilePage = (props: { params: { locale: string } }) => (
  <div className="my-6 -ml-16">dashboard {props.params.locale}</div>
);

export default UserProfilePage;
