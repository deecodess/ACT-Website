import { Fragment } from "react";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Support.module.scss";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Support = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Header title="Support" desc="For you to get funding for your project" />
      <div className={styles.tooMuchContent} data-aos="fade-up">
        <h2>Financing</h2>
        <div className={styles.content}>
          The projects approved are eligible for a grant of up to Rs. 12.50
          Lacs. The funding will cover costs occurring during the project: Lab
          equipment, survey costs, publication costs in open-source journals,
          etc. A detailed budget must be submitted together with the project
          proposal, mentioning also the fund requirements during different
          stages of the project.
        </div>
        <div className={styles.content}>
          The cost reporting must be in line with the project stages, divided
          into 6-month periods, following the project timetable project time
          table submitted. The project budget does not cover travel or possible
          conference costs.
        </div>
        <div className={styles.content}>
          We must agree on what is not covered by these costs; For example,
          participation in a conference can be discussed. Also publication costs
          in open-source journals require funds.
        </div>
        <h2>General Terms and Conditions for the Grant</h2>
        <div className={styles.content}>
          A proposal will be accepted if it is graded with more than 40 points
          and it does not score 0 in any of the criteria. The proposals must be
          uploaded to www.act.thapar.edu
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Support;
