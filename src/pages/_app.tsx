import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '@src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
