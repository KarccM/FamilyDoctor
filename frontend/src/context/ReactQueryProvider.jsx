import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryProvider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry(failureCount, error) {
          if (error.status === 404) return false;
          else if (failureCount < 2) return true;
          else return false;
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}