import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.webp";
import classNames from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <div className={styles.leftPart}>
          <img src={logo} alt="logo" className={styles.logo} />
          <spa className={styles.logoTitle}>
            Art, Cognition and Technology Center For Transdisciplinary Research
          </spa>
        </div>
        <span
          className={classNames("material-icons", styles.hamburger)}
          onClick={toggleMenu}
        >
          menu
        </span>
        <ul className={isOpen ? styles.showMenu : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/Submissions">Submissions</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/Evaluation">Evaluations</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Navbar;
