import s from "./MenuItem.component.module.scss";

import { Link as AnimateLink } from "react-scroll";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuItem = ({
  to,
  label,
  index,
  buttonVariants,
  hideMenu,
}: {
  to: string;
  label: string;
  index: number;
  buttonVariants: any;
  hideMenu: () => void;
}) => (
  <>
    {label === "Blog" ? (
      <Link href={'/Blog'}>
        <motion.div
          onClick={hideMenu}
          className={s.item}
          variants={buttonVariants}
          whileHover="hover"
        >
          {label}
        </motion.div>
      </Link>
    ) : (
      <AnimateLink
        key={index}
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
      >
        <motion.div
          onClick={hideMenu}
          className={s.item}
          variants={buttonVariants}
          whileHover="hover"
        >
          {label}
        </motion.div>
      </AnimateLink>
    )}
  </>
);

export default MenuItem;
