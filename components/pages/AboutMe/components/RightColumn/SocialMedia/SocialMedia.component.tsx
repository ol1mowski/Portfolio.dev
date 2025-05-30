import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../../AboutMe.page.module.scss';

export const SocialMedia: FC = () => {
  const socialLinks = [
    {
      href: 'https://github.com/ol1mowski',
      icon: 'https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978258/Portfolio/Icons/gh_je0wa4.svg',
      alt: 'GitHub',
      label: 'GitHub',
      width: 32,
      height: 32,
    },
    {
      href: 'https://www.linkedin.com/in/oliwier-markiewicz-47857228a/',
      icon: 'https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978258/Portfolio/Icons/linkedIn_wz8bz2.svg',
      alt: 'LinkedIn',
      label: 'LinkedIn',
      width: 32,
      height: 32,
    },
    {
      href: 'https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q',
      icon: 'https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978259/Portfolio/Icons/yt_qvjndd.svg',
      alt: 'YouTube',
      label: 'YouTube',
      width: 40,
      height: 40,
    },
  ];

  return (
    <motion.div
      className={styles.socialMedia}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h3 className={styles.socialTitle}>Znajdź mnie w social media</h3>
      <div className={styles.socialLinks}>
        {socialLinks.map(social => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={social.label}
          >
            <Image
              src={social.icon}
              alt={social.alt}
              width={social.width}
              height={social.height}
              className={styles.socialIcon}
            />
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialMedia;
