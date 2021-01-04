import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/styles/theme.js";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Semibold.ttf"
          as="font"
          crossOrigin=""
        />
            <link
          rel="preload"
          href="/fonts/Lora/static/Lora-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Lora/static/Lora-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Lora/static/Lora-Semibold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
