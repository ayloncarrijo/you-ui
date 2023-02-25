import { Roboto } from "@next/font/google";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import Head from "next/head";

const materialSymbolsFont = localFont({
  src: "../../public/fonts/material-symbols.woff2",
  variable: "--material-symbols-font",
});

const robotoFont = Roboto({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--roboto-font",
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>YouUI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${materialSymbolsFont.variable} ${robotoFont.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
