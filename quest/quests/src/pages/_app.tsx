import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import here

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;