import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";
import theme from "../theme";

export default function Document(): JSX.Element {
  return (
    <Html lang={"en"}>
      <Head>
        <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
        <link rel={"preconnect"} href={"https://fonts.gstatic.com"} />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Lato:wght@900&family=MuseoModerno:wght@600&family=Poppins:wght@300;400;500;700&display=swap"
          }
          rel={"stylesheet"}
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <div
          id={"particles-js"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        />
        <Main />
        <NextScript />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src={"particles.min.js"} />
      </body>
    </Html>
  );
}
