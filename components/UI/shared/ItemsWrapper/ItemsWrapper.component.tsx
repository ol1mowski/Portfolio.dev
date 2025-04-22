import { FC, ReactNode } from 'react';

interface ItemsWrapperProps {
  className?: string;
  children: ReactNode;
}

export const ItemsWrapper: FC<ItemsWrapperProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
