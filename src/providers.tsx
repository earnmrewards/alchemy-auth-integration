import { ReactNode } from "react";
import { config, queryClient } from "./config";
import { QueryClientProvider } from "@tanstack/react-query";
import { AlchemyAccountProvider } from "@account-kit/react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AlchemyAccountProvider config={config} queryClient={queryClient}>
        {children}
      </AlchemyAccountProvider>
    </QueryClientProvider>
  );

  return children;
}
