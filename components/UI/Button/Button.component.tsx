import s from "./Button.component.module.scss";

function Button({
  type,
  value,
}: {
  type: "normal" | "yt" | "small";
  value: string;
}) {
  let btnClass;

  switch (type) {
    case "normal":
      btnClass = s.btn;
      break;
    case "yt":
      btnClass = s.btn_yt;
      break;
    case "small":
      btnClass = s.btn_small;
      break;
  }

  return <button className={btnClass}>{value}</button>;
}

export default Button;
