import { FC } from 'react';
import s from "./InfoAboutMe.component.module.scss";
import InfoHeader from "./InfoHeader/InfoHeader.component";
import InfoDescription from "./InfoDescription/InfoDescription.component";

export const InfoAboutMe: FC = () => {
  return (
    <section className={s.aboutMeWrapper}>
      <InfoHeader />
      <InfoDescription />
    </section>
  );
};

export default InfoAboutMe;
