import s from "./Opinions.page.module.scss";

import Paragraph from "@/components/UI/Word/Paragraph.component";
import Image from "next/image";

function Opinions() {
  return (
    <section className={s.container}>
      <div className={s.container__sectionInfoWrapper}>
        <span className={s.container__sectionInfoWrapper__content}>O Mnie</span>
      </div>
      <div className={s.container__headerWrapper}>
        <h3 className={s.container__headerWrapper__header}>
          <Paragraph
            className={s.container__headerWrapper__header}
            value="Opinie Moich Klientów"
          />
        </h3>
      </div>
      <div className={s.container__opinionsWrapper}>
            <div className={s.container__opinionsWrapper__opinion}>
                <p className={s.container__opinionsWrapper__opinion__text}>Oliwier Markiewicz is a good lad and very hardworking. He make us the company website as we instructed. We hope you do well in life.</p>
                <a href="https://jumpshare.com/s/mNlcSWPwdNWRNFOaei2n" target="_blank" rel="noopener noreferrer"><span className={s.container__importantTextDecorate}>Zobacz Pełną Opinię</span></a>
                <div className={s.container__opinionsWrapper__opinion__imgWrapper}>
                    <Image src={'https://res.cloudinary.com/dbbuav0rj/image/upload/v1729496075/Portfolio/images/logo_infmovilweb_tafnul.webp'} alt="Company Logo" width={40} height={40}/>
                    <span>Infmovilweb</span>
                </div>
            </div>
      </div>
    </section>
  );
}

export default Opinions;
