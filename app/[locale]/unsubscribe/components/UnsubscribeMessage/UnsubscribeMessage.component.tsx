import s from '../../page.module.scss';

interface UnsubscribeMessageProps {
  message: string;
  isSuccess: boolean;
}

export default function UnsubscribeMessage({ message, isSuccess }: UnsubscribeMessageProps) {
  if (!message) return null;

  return <div className={`${s.message} ${isSuccess ? s.success : s.error}`}>{message}</div>;
}
