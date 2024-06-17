import s from "./Button.component.module.scss";

function Button({ type, value }: { type: 'normal' | 'yt', value: string }) {
  return (
    <button className={type === 'yt' ? s.btn_yt : s.btn}>
      { value }
    </button>
  );
}

export default Button;
