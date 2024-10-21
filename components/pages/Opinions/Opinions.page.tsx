import Paragraph from "@/components/UI/Word/Paragraph.component";
import s from "./Opinions.page.module.scss";
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
                <p className={s.container__opinionsWrapper__opinion__text}></p>
                <a href="" target="_blank" rel="noopener noreferrer"><span className={s.container__importantTextYtDecorate}>Zobacz Pełną Opinię</span></a>
                <div className={s.container__opinionsWrapper__opinion__imgWrapper}>
                    <Image src={''} alt="Company Logo" width={400} height={300}/>
                    <span>Infmovilweb</span>
                </div>
            </div>
      </div>
    </section>
  );
}

export default Opinions;
