import { RefObject } from "react";
import s from "./Form.component.module.scss";
import Image from "next/image";
import arrowIcon from "@/assets/arrow.png";

function FormComponent({
  handleSubmit,
  inp,
  success,
  isPending,
  error,
}: {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  inp: RefObject<HTMLInputElement>;
  isPending: boolean;
  success: string | null;
  error: string | null;
}) {
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.form__inp}
          type="text"
          name="email"
          ref={inp}
          placeholder="Twój email"
        />
        <button className={s.form__btn} type="submit" disabled={isPending}>
          <Image src={arrowIcon} alt="arrow icon" width={25} height={25} />
        </button>
      </form>
      {isPending ? <p className={s.form__sending}>Wysyłanie...</p> : null}
      {success ? <p className={s.form__success}>{success}</p> : null}
      {error ? <p className={s.form__error}>{error}</p> : null}
    </>
  );
}

export default FormComponent;
