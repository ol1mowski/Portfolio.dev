import { Link as AnimationLink } from "react-scroll";
import Link from "next/link";
import { motion } from "framer-motion";

import style from "./NavBar.component.module.scss";

const NavBar = ({ type }: { type: string }) => {
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
        {type === "in" ? (
          <>
            <AnimationLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
              href="#home"
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
              href="#about"
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
              href="#projects"
            >
              <motion.div
                className={style.navSectionBig__items}
                variants={buttonVariants}
                whileHover="hover"
              >
                Projekty
              </motion.div>
            </AnimationLink>
            <a href="/Blog">
              <motion.div
                className={style.navSectionBig__items}
                variants={buttonVariants}
                whileHover="hover"
              >
                Blog
              </motion.div>
            </a>
            <AnimationLink
              activeClass="active"
              to="opinions"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
              href="#opinions"
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
              href="#contact"
            >
              <motion.div
                className={style.navSectionBig__items}
                variants={buttonVariants}
                whileHover="hover"
              >
                Kontakt
              </motion.div>
            </AnimationLink>
          </>
        ) : (
          <>
            <a href="/#home">Home</a>
            <a href="/#about">O Mnie</a>
            <a href="/#projects">Projekty</a>
            <a href="/Blog">Blog</a>
            <a href="/#opinions">Opinie</a>
            <a href="/#contact">Kontakt</a>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
