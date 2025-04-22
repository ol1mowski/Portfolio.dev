import s from './Button.component.module.scss';

interface ButtonProps {
  type: 'small' | 'normal' | 'yt';
  value: string;
  onClick?: () => void;
  'aria-label'?: string;
}

function Button({ type, value }: ButtonProps) {
  let btnClass;

  switch (type) {
    case 'normal':
      btnClass = s.btn;
      break;
    case 'yt':
      btnClass = s.btn_yt;
      break;
    case 'small':
      btnClass = s.btn_small;
      break;
  }

  return <button className={btnClass}>{value}</button>;
}

export default Button;
