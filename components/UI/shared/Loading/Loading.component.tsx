import { FC } from 'react';

interface LoadingProps {
  message: string;
  className?: string;
}

export const Loading: FC<LoadingProps> = ({ message, className }) => {
  return (
    <div role="status" className={className}>
      {message}
    </div>
  );
};
