import { AppProps } from "next/app";
import { useRouter } from "next/router";

import "../styles/globals.css";

import RootLayout from "../layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const metaTitle =
    router.pathname === "/"
      ? "Home"
      : router.pathname
          .replace("/", "")
          .replace(/-/g, " ")
          .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <RootLayout metaTitle={metaTitle}>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default MyApp;
