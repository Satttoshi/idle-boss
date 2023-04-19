import GlobalStyle from "~/styles";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import useStore from "~/src/zustand/store";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { SessionProvider } from "next-auth/react";

const { chains, provider } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "IDLE BOSS",
  projectId: "IDLE_BOSS",
  chains,
});

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
        setMoney(1000000000);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setMoney]);

  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider>
          <RainbowKitProvider chains={chains}>
            <ThemeProvider
              defaultTheme="theme0"
              themes={["theme0", "theme1", "theme2"]}
            >
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>{" "}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}
