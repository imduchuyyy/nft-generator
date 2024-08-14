import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defineChain } from 'viem';

const mainnet = defineChain({
  id: 88,
  name: "Viction",
  nativeCurrency: {
    decimals: 18,
    name: "Viction",
    symbol: "VIC",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.viction.xyz"],
      webSocket: ["wss://ws.viction.xyz"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://vicscan.xyz" },
  },
  testnet: false,
});
export const config = getDefaultConfig({
  appName: 'NFT Generator',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet
  ],
  ssr: true,
});