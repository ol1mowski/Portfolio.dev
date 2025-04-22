import s from './Footer.page.module.scss';

import FooterCopyright from './FooterCopyright/FooterCopyright.component';
import FooterCtaIcons from './FooterCtaIcons/FooterCtaIcons.component';
import FooterPrivacy from './FooterPrivacy/FooterPrivacy.component';
import FooterWrapper from './FooterWrapper/FooterWrapper.component';

const Footer = () => {
  return (
    <>
      <footer className={s.footerContainer}>
        <FooterWrapper>
          <FooterPrivacy />
          <FooterCopyright />
          <FooterCtaIcons />
        </FooterWrapper>
      </footer>
    </>
  );
};

export default Footer;
