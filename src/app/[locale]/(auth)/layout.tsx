import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';

import LocaleSwitcher from '@/components/common/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              News
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <Link
              href="/sign-up/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Sign up
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Sign In
            </Link>
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
