import s from "./Caption.component.module.scss";

function Caption({ value, type }: { value: string; type: "main" | "sub" }) {
  return (
    <>
      {type === "main" ? (
        <h1 className={s.title}>{value}</h1>
      ) : (
        <h2 className={s.title_sub}>{value}</h2>
      )}
    </>
  );
}

export default Caption;
