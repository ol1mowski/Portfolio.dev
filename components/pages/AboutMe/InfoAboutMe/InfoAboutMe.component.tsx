import s from "./InfoAboutMe.component.module.scss";
import InfoHeader from "./InfoHeader/InfoHeader.component";
import InfoDescription from "./InfoDescription/InfoDescription.component";

function InfoAboutMe() {
  return (
    <section className={s.aboutMeWrapper}>
      <InfoHeader />
      <InfoDescription />
    </section>
  );
}

export default InfoAboutMe;
