import Head from "next/head";
import GlobalStyle from "~/styles";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import useStore from "~/src/zustand/store";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createClient, WagmiConfig } from "wagmi";
import ConfigureChains, { connectors } from "./api/wagmi/ConfigureChains";

const { chains, provider } = ConfigureChains;

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  const setMoney = useStore((state) => state.setMoney);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === " ") {
        setMoney(1000000000000000);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setMoney]);

  return (
    <>
      <Head>
        <title>IDLE BOSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ThemeProvider
            defaultTheme="theme0"
            themes={["theme0", "theme1", "theme2"]}
          >
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>{" "}
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
