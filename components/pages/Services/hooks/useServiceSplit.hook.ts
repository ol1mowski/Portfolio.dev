/**
 * Hook służący do dzielenia tekstów usług na podstawie separatora
 */
export const useServiceSplit = () => {
  const splitServiceType = (type: string, separator: string = '-'): string[] => {
    return type.split(separator);
  };

  return { splitServiceType };
}; 