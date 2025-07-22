import { FC } from 'react';
import s from './ErrorMessage.component.module.scss';

interface ErrorMessageProps {
  message: string;
  className?: string;
  variant?: 'alert' | 'inline' | 'page' | 'toast';
  severity?: 'error' | 'warning' | 'info';
  showIcon?: boolean;
  showRetry?: boolean;
  onRetry?: () => void;
  retryText?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
  message,
  className = '',
  variant = 'alert',
  severity = 'error',
  showIcon = true,
  showRetry = false,
  onRetry,
  retryText = 'Spróbuj ponownie',
}) => {
  const containerClass = `${s.errorContainer} ${s[variant]} ${s[severity]} ${className}`.trim();

  const getIcon = () => {
    if (!showIcon) return null;

    switch (severity) {
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '❌';
    }
  };

  const getTitle = () => {
    switch (severity) {
      case 'warning':
        return 'Uwaga!';
      case 'info':
        return 'Informacja';
      default:
        return 'Wystąpił błąd';
    }
  };

  const renderContent = () => {
    switch (variant) {
      case 'inline':
        return (
          <>
            {showIcon && <span className={s.icon}>{getIcon()}</span>}
            <span className={s.message}>{message}</span>
          </>
        );

      case 'page':
        return (
          <>
            {showIcon && <div className={s.icon}>{getIcon()}</div>}
            <h2 className={s.title}>{getTitle()}</h2>
            <p className={s.message}>{message}</p>
            {showRetry && onRetry && (
              <button onClick={onRetry} className={s.retryButton}>
                {retryText}
              </button>
            )}
          </>
        );

      case 'toast':
        return (
          <>
            {showIcon && <span className={s.icon}>{getIcon()}</span>}
            <div className={s.content}>
              <span className={s.message}>{message}</span>
              {showRetry && onRetry && (
                <button onClick={onRetry} className={s.retryButton}>
                  {retryText}
                </button>
              )}
            </div>
          </>
        );

      default: // alert
        return (
          <>
            {showIcon && <span className={s.icon}>{getIcon()}</span>}
            <span className={s.message}>{message}</span>
            {showRetry && onRetry && (
              <button onClick={onRetry} className={s.retryButton}>
                {retryText}
              </button>
            )}
          </>
        );
    }
  };

  return (
    <div role="alert" aria-live="polite" className={containerClass}>
      {renderContent()}
    </div>
  );
};
