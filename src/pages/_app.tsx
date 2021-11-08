import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '@src/styles/globals.css';
import { appWithTranslation } from 'next-i18next';

function JuziApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
export default appWithTranslation(JuziApp);
