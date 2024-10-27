import Image from "next/image";
import s from './Opinion.component.module.scss';

function Opinion() {
  return (
    <div className={s.opinion}>
      <p className={s.opinion__text}>
        Oliwier Markiewicz is a good lad and very hardworking. He make us the
        company website as we instructed. We hope you do well in life.
      </p>
      <a
        href="https://jumpshare.com/s/mNlcSWPwdNWRNFOaei2n"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={s.importantTextDecorate}>
          Zobacz Pełną Opinię
        </span>
      </a>
      <div className={s.opinion__imgWrapper}>
        <Image
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1729496075/Portfolio/images/logo_infmovilweb_tafnul.webp"
          }
          alt="Company Logo"
          width={40}
          height={40}
        />
        <span>Infmovilweb</span>
      </div>
    </div>
  );
}

export default Opinion;
