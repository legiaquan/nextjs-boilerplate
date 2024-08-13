import { useTranslations } from 'next-intl';

export default function Login() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t('hello', { name: 'Nextjs Boilerplate' })}
    </main>
  );
}
