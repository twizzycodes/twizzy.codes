import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CursorSparkles from "@/components/CursorSparkles";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    const portfolio = document.getElementById("portfolio");
    if (!portfolio) {
      setShowSparkles(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowSparkles(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(portfolio);
    return () => observer.disconnect();
  }, [router.asPath]);

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
      {showSparkles && <CursorSparkles />}
      <Component {...pageProps} />
    </>
  );
}
