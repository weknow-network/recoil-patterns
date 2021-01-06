import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../components/GlobalStyle';
import { DebugObserver } from '../debug';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <DebugObserver />
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
