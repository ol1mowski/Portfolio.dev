import s from "./MenuItem.component.module.scss";

import { Link as AnimateLink } from "react-scroll";
import { motion } from "framer-motion";

const MenuItem = ({
  to,
  label,
  index,
  hideMenu,
}: {
  to: string;
  label: string;
  index: number;
  hideMenu: () => void;
}) => (
  <>
    {label === "Blog" ? (
      <a href={"/Blog"}>
        <motion.div onClick={hideMenu} className={s.item} whileHover="hover">
          {label}
        </motion.div>
      </a>
    ) : (
      <>
        <a href={to}>
          <div onClick={hideMenu} className={s.item}>
            {label}
          </div>
        </a>
      </>
    )}
  </>
);

export default MenuItem;
