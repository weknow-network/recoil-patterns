import { AppInitialProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../components/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppInitialProps & unknown) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
