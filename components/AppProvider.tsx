"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const AppProvider = (props: Props) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div id="app">{props.children}</div>
      </QueryClientProvider>
    </>
  );
};
