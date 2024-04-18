import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
// import FooterTriangle from "../../assets/FooterTri.png";
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h1>ACT CENTER</h1>
          <h4>Thapar Institute of Engineering and Technology</h4>
          <h4>
            Trans disciplinary collaboration is not just encouraged but embedded
            in our educational and research culture
          </h4>
        </div>
        <div className={styles.footerColumn}>
          <h3>QUICK LINKS</h3>
          <ul>
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
              <NavLink to="/Evaluations">Evaluations</NavLink>
            </li>
            <li>
              <NavLink to="/People">People</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>VISIT US</h3>
          <h4>Thapar Institute of Engineering and Technology</h4>
          <h4>Bhadson Rd, Adarsh Nagar, Patiala, Punjab 147004</h4>
        </div>
        <div className={styles.footerColumn}>
          {/* <img
            src={FooterTriangle}
            className={styles.footerTri}
            alt="FooterTriangle"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
