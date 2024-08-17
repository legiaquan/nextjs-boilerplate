'use client';

import NextError from 'next/error';
import { useEffect } from 'react';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(`ERROR::`, props.error);
  }, [props.error]);

  return (
    <html lang={props.params.locale}>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
