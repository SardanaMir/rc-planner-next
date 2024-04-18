import type { AppProps } from 'next/app'
import 'normalize.scss/normalize.scss';
import '../styles/app.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}