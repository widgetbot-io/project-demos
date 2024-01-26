import type { AppProps } from 'next/app';
import { StoreProvider } from 'easy-peasy';

import store from '@/store';

import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
  )
}
