import s from "./techStack.module.scss";

import html from "@/assets/html_icon.svg";
import css from "@/assets/css.svg";
import scss from "@/assets/sass.svg";
import js from "@/assets/javascript.svg";
import ts from "@/assets/typescript.svg";
import react from "@/assets/react.svg";
import next from "@/assets/nextjs.svg";
import python from "@/assets/python.svg";
import figma from "@/assets/figma.svg";
import wordPress from "@/assets/wordpress.svg";
import webflow from '@/assets/webflow.svg';

import Image from "next/image";

const TechStack = () => {
  return (
    <>
      <section className={s.techStackContainer}>
        <div className={s.techStackContainer__title}>
          <p className={s.techStackContainer__title__p}>Tech Stack</p>
        </div>
        <div className={s.techStackContainer__skillsWrapper}>
          <Image
            src={html}
            alt="html icon"
            width={75}
            height={75}
            className={s.techStackContainer__skillsWrapper__skill}
          />
          <Image
            src={css}
            alt="css icon"
            width={75}
            height={75}
            className={s.techStackContainer__skillsWrapper__skill}
          />{" "}
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={scss}
              alt="scss icon"
              width={75}
              height={75}
              className={s.techStackContainer__skillsWrapper__skill}
            />
          </a>
          <Image
            src={js}
            alt="js icon"
            width={75}
            height={75}
            className={s.techStackContainer__skillsWrapper__skill}
          />
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ts}
              alt="ts icon"
              width={75}
              height={75}
              className={s.techStackContainer__skillsWrapper__skill}
            />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={react}
              alt="react icon"
              width={75}
              height={75}
              className={s.techStackContainer__skillsWrapper__skill}
            />
          </a>
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={python}
              alt="python icon"
              width={75}
              height={75}
              className={s.techStackContainer__skillsWrapper__skill}
            />
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={next}
              alt="nextjs icon"
              width={75}
              height={75}
              className={s.techStackContainer__skillsWrapper__skill}
            />
          </a>
          <a
            href="https://wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={wordPress}
              alt="wordpress icon"
              width={75}
              height={75}
              className={s.techStackContainer__skillsWrapper__skill}
            />
          </a>
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={figma}
              alt="figma icon"
              width={75}
              height={75}
              className={s.techStackContainer__skillsWrapper__skill}
            />
          </a>{" "}
          <a
            href="https://webflow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={webflow}
              alt="webflow icon"
              width={75}
              height={75}
              className={s.techStackContainer__skillsWrapper__skill}
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default TechStack;
