import { createConfig } from "@account-kit/react";
import { QueryClient } from "@tanstack/react-query";
import { alchemy, arbitrumSepolia } from "@account-kit/infra";

export const config = createConfig(
  {
    transport: alchemy({ apiKey: "pWRIWfoUE9MIS3G2W_4Ai74lPInS3Sy8" }),
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
