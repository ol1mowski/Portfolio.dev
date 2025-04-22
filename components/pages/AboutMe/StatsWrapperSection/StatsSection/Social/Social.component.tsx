import s from './Social.component.module.scss';
import IconElement from '../IconElement/IconElement.component';

function Social() {
  return (
    <div className={s.infoWrapper}>
      <div className={s.infoWrapper__iconsWrapper}>
        <IconElement
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978258/Portfolio/Icons/linkedIn_wz8bz2.svg"
          alt="Linkedin icon"
          href="https://www.linkedin.com/in/oliwier-markiewicz-47857228a/"
        />
        <IconElement
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978259/Portfolio/Icons/yt_qvjndd.svg"
          alt="YouTube image"
          yt
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
        />
        <IconElement
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978258/Portfolio/Icons/gh_je0wa4.svg"
          alt="GitHub image"
          href="https://github.com/ol1mowski"
        />
      </div>
      <span className={s.infoWrapper__des}>Znajdź Mnie</span>
    </div>
  );
}

export default Social;
