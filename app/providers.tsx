"use client";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}

export default Providers;
