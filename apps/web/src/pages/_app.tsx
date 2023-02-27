import { Roboto } from "@next/font/google";
import localFont from "@next/font/local";
import { baseStyles } from "@you-ui/core";
import type { AppProps } from "next/app";
import Head from "next/head";

const materialSymbols = localFont({
  src: "../../public/fonts/material-symbols.woff2",
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  baseStyles();

  return (
    <>
      <Head>
        <title>YouUI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>
        {`
          :root {
            --app-fonts-material-symbols: ${materialSymbols.style.fontFamily};
            --app-fonts-roboto: ${roboto.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  );
}
