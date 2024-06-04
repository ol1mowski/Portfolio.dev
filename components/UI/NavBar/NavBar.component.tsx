import { Link as AnimationLink } from "react-scroll";
import Link from "next/link";
import { motion } from "framer-motion";

import style from "./NavBar.component.module.scss";

const NavBar = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <>
      <nav className={style.navSectionBig}>
        <AnimationLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Home
          </motion.div>
        </AnimationLink>
        <AnimationLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            O mnie
          </motion.div>
        </AnimationLink>
        <AnimationLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Projekty
          </motion.div>
        </AnimationLink>
        <Link href="/blog">
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Blog
          </motion.div>
        </Link>
        <AnimationLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Kontakt
          </motion.div>
        </AnimationLink>
      </nav>
    </>
  );
};

export default NavBar;
