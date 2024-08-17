// import { ClerkProvider } from "@clerk/nextjs";

// import enUS from 'antd/es/calendar/locale/en_US';
// import jaJP from 'antd/es/calendar/locale/ja_JP';

// import { AppConfig } from '@/utils/AppConfig';

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // let clerkLocale = enUS;
  // let signInUrl = '/sign-in';
  // let signUpUrl = '/sign-up';
  // let dashboardUrl = '/dashboard';

  // if (props.params.locale === 'ja') {
  //   clerkLocale = jaJP;
  // }

  // if (props.params.locale !== AppConfig.defaultLocale) {
  //   signInUrl = `/${props.params.locale}${signInUrl}`;
  //   signUpUrl = `/${props.params.locale}${signUpUrl}`;
  //   dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  // }

  return props.children;
  //   <ClerkProvider
  //     localization={clerkLocale}
  //     signInUrl={signInUrl}
  //     signUpUrl={signUpUrl}
  //     signInFallbackRedirectUrl={dashboardUrl}
  //     signUpFallbackRedirectUrl={dashboardUrl}
  //   >
  // </ClerkProvider>
}
