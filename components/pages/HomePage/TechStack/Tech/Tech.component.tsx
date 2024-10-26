import Image from "next/image";
import s from "./Tech.component.module.scss";

function Tech({ src, href, alt }: { src: string; href: string; alt: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} width={75} height={75} className={s.skill} />
    </a>
  );
}

export default Tech;
