import { FC, ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  ariaLabel: string;
  className?: string;
  role?: string;
  children: ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = ({
  id,
  ariaLabel,
  className,
  role,
  children,
}) => {
  return (
    <section id={id} className={className} role={role || 'region'} aria-label={ariaLabel}>
      {children}
    </section>
  );
};
