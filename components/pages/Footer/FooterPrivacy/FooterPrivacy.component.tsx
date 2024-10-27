import s from './FooterPrivacy.component.module.scss';

function FooterPrivacy() {
  return (
    <div className={s.links}>
      <a target="_blank" href="/prywatnosc">
        <span className={s.links__span}>Polityka Prywatnosci</span>
      </a>
    </div>
  );
}

export default FooterPrivacy;
