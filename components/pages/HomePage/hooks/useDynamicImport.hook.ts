import { ComponentType, ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface DynamicImportOptions {
  ssr?: boolean;
  loading?: () => ReactNode;
}

export const useDynamicImport = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: DynamicImportOptions = { ssr: true }
) => {
  return dynamic(importFunc, {
    ssr: options.ssr,
    loading: options.loading || (() => null),
  });
}; 