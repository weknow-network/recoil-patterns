import { AppInitialProps } from "next/app";
import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import { RecoilRoot } from "recoil";
const MyApp = ({ Component, pageProps }: AppInitialProps & any) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
