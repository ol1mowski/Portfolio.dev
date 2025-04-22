import { FC } from 'react';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, className }) => {
  return (
    <div role="alert" className={className}>
      {message}
    </div>
  );
};
