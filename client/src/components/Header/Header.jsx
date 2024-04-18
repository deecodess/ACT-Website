import { Fragment } from "react";
import styles from "./Header.module.scss";
const Header = ({ title, desc }) => {
  return (
    <Fragment>
      <div className={styles.header}>
        <h1>{title}</h1>
        <h3>{desc}</h3>
      </div>
    </Fragment>
  );
};

export default Header;
