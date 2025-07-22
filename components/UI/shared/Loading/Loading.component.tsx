import { FC } from 'react';
import s from './Loading.component.module.scss';

interface LoadingProps {
  message?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'spinner' | 'dots' | 'skeleton';
}

export const Loading: FC<LoadingProps> = ({
  message = 'Ładowanie...',
  className = '',
  size = 'medium',
  variant = 'spinner',
}) => {
  const containerClass = `${s.loadingContainer} ${s[size]} ${s[variant]} ${className}`.trim();

  const renderSpinner = () => (
    <div className={s.spinner}>
      <div className={s.spinner__circle}></div>
    </div>
  );

  const renderDots = () => (
    <div className={s.dots}>
      <div className={s.dots__dot}></div>
      <div className={s.dots__dot}></div>
      <div className={s.dots__dot}></div>
    </div>
  );

  const renderSkeleton = () => (
    <div className={s.skeleton}>
      <div className={s.skeleton__line}></div>
      <div className={s.skeleton__line}></div>
      <div className={s.skeleton__line}></div>
    </div>
  );

  const renderAnimation = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div role="status" aria-label={message} className={containerClass}>
      {renderAnimation()}
      {message && <p className={s.message}>{message}</p>}
    </div>
  );
};
