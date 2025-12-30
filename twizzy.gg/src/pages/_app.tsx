import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"Twizzy.gg"}
        description={"Twizzy's personal site"}
        canonical={`https://twizzy.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://twizzy.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "Twizzy.gg",
          description: "Twizzy's personal site",
          images: [
            {
              url: "/me.jpeg",
              alt: "twizzydotgg",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
