import { configureChains } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { getDefaultWallets } from "@rainbow-me/rainbowkit";

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const ConfigureChains = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: apiKey }), publicProvider()]
);

const { chains } = ConfigureChains;

export const { connectors } = getDefaultWallets({
  appName: "IDLE BOSS",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains,
});

export default ConfigureChains;
