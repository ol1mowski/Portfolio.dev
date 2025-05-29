import React, { memo } from 'react';

interface IconProps {
  className?: string;
}

export const ClockIcon = memo<IconProps>(({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
  </svg>
));

ClockIcon.displayName = 'ClockIcon';

export const ShieldIcon = memo<IconProps>(({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
  </svg>
));

ShieldIcon.displayName = 'ShieldIcon';
