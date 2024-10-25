import s from "./MenuItem.component.module.scss";

import { motion } from "framer-motion";

const MenuItem = ({
  to,
  label,
  hideMenu,
}: {
  to: string;
  label: string;
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
