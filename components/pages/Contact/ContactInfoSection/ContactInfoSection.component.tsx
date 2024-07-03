import s from "./ContactInfoSection.component.module.scss";

import Image from "next/image";

import telephone from "@/assets/telephone.png";

function ContactInfoSection({
  title,
  content,
  link,
}: {
  title: string;
  content: string;
  link: string;
}) {
  return (
    <div className={s.icon}>
      <div className={s.icon}>
        <div className={s.icon}>
          <span className={s.icon__span}>
            {title === "Lokalizacja" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-map-search"
              >
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M20.2 20.2l1.8 1.8" />
              </svg>
            )}
            {title === "e-mail" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            )}
            {title === "Telefon" && (
              <Image
                src={telephone}
                width={30}
                height={30}
                alt="Telephone Icon"
              />
            )}
          </span>
          <div className={s.icon__info}>
            <h3 className={s.icon__info__h3}>{title}</h3>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={s.icon__info__a}
            >
              <p className={s.icon__info__p}>{content}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoSection;
