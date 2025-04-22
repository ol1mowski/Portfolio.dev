import { ComponentType, ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface DynamicImportOptions {
  loading?: () => ReactNode;
}

export const useDynamicImport = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: DynamicImportOptions = {}
) => {
  return dynamic(importFunc, {
    loading: options.loading,
  });
};
