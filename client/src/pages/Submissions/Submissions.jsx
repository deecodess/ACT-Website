import styles from "./Submissions.module.scss";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";
import Data from "./Data";
import Header from "../../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
const Submissions = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const renderProjects = () => {
    return Data.map((project) => {
      return (
        <div key={project.id} className={styles.project} data-aos="fade-up">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <Navbar />
      <div className={styles.submissionsWrapper}>
        <Header title="Submissions" desc="For you to change the world" />
        <div className={styles.tooMuchContent}>
          <h2 data-aos="fade-up">Guidelines</h2>
          <div className={styles.content} data-aos="fade-up">
            Submissions of proposals will be done online, on the ACT online
            platform, according to the Submission specifications (see Appendix
            1). The maximum duration of a project can be two years.
          </div>
          <div className={styles.content} data-aos="fade-up">
            A plan of the project must be submitted identifying the project
            objectives/targets on the basis of half-year intervals (interim
            progress reports). The deliverables will be reviewed every six
            months on the basis of the project objectives/targets for the period
            in question. A progress report will be submitted by the research
            team on a bi-yearly basis and meeting the objectives/targets will be
            the criterion for the financing of the following project face. The
            proposals submitted will be reviewed and evaluated by the ACT
            Center.
          </div>
          <div className={styles.content} data-aos="fade-up">
            The interim and final evaluations will be done by the Center’s
            management based on a clear and transparent evaluation method (See
            Appendix 2). In case a project falls outside the knowledge domains
            of the management, an ad-hoc scientific committee will be put
            together to evaluate the project.
          </div>
          <h2 data-aos="fade-up">Example Projects</h2>
          <div className={styles.projectsContainer}>{renderProjects()}</div>
          <h2 data-aos="fade-up">Make a Submission</h2>
        </div>

        <div className={styles.buttonContainer} data-aos="fade-up">
          <Button color="#F4970F">Submissions</Button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Submissions;
