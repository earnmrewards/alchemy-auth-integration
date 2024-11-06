import { createConfig } from "@account-kit/react";
import { QueryClient } from "@tanstack/react-query";
import { alchemy, arbitrumSepolia } from "@account-kit/infra";

export const config = createConfig(
  {
    transport: alchemy({ apiKey: import.meta.env.VITE_API_KEY }),
    chain: arbitrumSepolia,
    ssr: false,
  },
  {
    auth: {
      sections: [
        [{ type: "email" }],
        [
          {
            type: "external_wallets",
            walletConnect: { projectId: "ourProjectId" },
          },
        ],
      ],
      addPasskeyOnSignup: true,
    },
  }
);

export const queryClient = new QueryClient();
