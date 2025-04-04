'use client';
import React from 'react';

import { CounterStoreProvider } from '@/providers/map-store-provider';
import { ThemeProvider } from '@/providers/theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CounterStoreProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </CounterStoreProvider>
    </>
  );
}
