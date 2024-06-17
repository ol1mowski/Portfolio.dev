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
          href="#home" // Dodaj href dla indeksowania
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
          href="#about" // Dodaj href dla indeksowania
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
          href="#projects" // Dodaj href dla indeksowania
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Projekty
          </motion.div>
        </AnimationLink>
        <Link href="/Blog">
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
          to="opinions"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
          href="#opinions" // Dodaj href dla indeksowania
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Opinie
          </motion.div>
        </AnimationLink>
        <AnimationLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
          href="#contact" // Dodaj href dla indeksowania
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
