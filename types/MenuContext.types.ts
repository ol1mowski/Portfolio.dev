export interface MenuContextType {
  isOpen: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
} 