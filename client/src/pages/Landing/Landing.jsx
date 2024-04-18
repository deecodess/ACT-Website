import { Fragment } from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Landing.module.scss";
import Poster from "../../assets/Poster.png";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Health from "../../assets/Health.png";
import Environment from "../../assets/Environment.png";
import Learning from "../../assets/Learning.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={styles.landingWrapper}>
        <div className={styles.heroWrapper} data-aos="fade-up">
          <div className={styles.aboutInfo}>
            <h1>ACT</h1>
            <h2>ART | COGNITION | TECHNOLOGY </h2>
            <h4>
              The ACT Center envisions a future where trans-disciplinary
              collaboration is not just encouraged but embedded in our
              educational and research culture.
            </h4>
          </div>
          <div className={styles.buttonContainer}>
            <Button color="#D90000" textcolor="#FFFFFF">
              Call for submissions
            </Button>
            <Button color="#F4970F">Trello Project Management Tool</Button>
          </div>
          <a
            href="https://transdisciplinarity.ch/en"
            className={styles.smallLink}
          >
            Network For Transdisciplinary Research
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
        <div className={styles.areaOfInterestInfo} data-aos="fade-up">
          <h4>Stride towards Perfection</h4>
          <h2>Areas of Interest</h2>

          <div className={styles.areaOfInterestTileContainer}>
            <div className={styles.areaOfInterestTile}>
              <img
                src={Health}
                className={styles.areaOfInterestIcons}
                alt="Health"
              />
              <h3>Health and Well Being</h3>
              <h5>
                Unraveling health disparities, innovative healthcare delivery,
                and the development of interventions to enhance overall
                well-being.
              </h5>
            </div>
            <div className={styles.areaOfInterestTile}>
              <img
                src={Environment}
                className={styles.areaOfInterestIcons}
                alt="Environment"
              />
              <h3>Environment, Energy and Sustainability</h3>
              <h5>
                Exploration of sustainable solutions to environmental
                challenges, including energy conservation, biodiversity
                preservation, and mitigation of climate change impacts.
              </h5>
            </div>
            <div className={styles.areaOfInterestTile}>
              <img
                src={Learning}
                className={styles.areaOfInterestIcons}
                alt="Learning"
              />
              <h3>Learning and Pedagogy</h3>
              <h5>
                Investigating novel methods and strategies to advance education
                and pedagogical practices, with a focus on improving learning
                outcomes and fostering lifelong learning.
              </h5>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button color="#D90000" textcolor="#FFFFFF">
              Read More
            </Button>
            <Button color="#F4970F">Research Topics</Button>
          </div>
        </div>
        <img src={Poster} className={styles.poster} alt="Poster" />
        <div className={styles.moreInfoContainer} data-aos="fade-up">
          <div className={styles.moreInfoTile}>
            <div className={styles.moreInfoLeftOne}>
              <h2>Trans-Disciplinary Cooperation</h2>
              <h3>
                The Center aims to facilitate collaboration among diverse
                faculties, breaking down traditional silos to encourage the
                convergence of ideas, methodologies, and expertise. By fostering
                a culture of collaboration, we foresee the emergence of
                innovative solutions to complex problems
              </h3>
              <div className={styles.buttonContainer}>
                <Button color="#D90000">Read More</Button>
              </div>
            </div>
            <div className={styles.moreInfoRightOne}></div>
          </div>
          <div className={styles.moreInfoTile}>
            <div className={styles.moreInfoLeftTwo}></div>
            <div className={styles.moreInfoRightTwo}>
              <h2>Cutting-Edge Research</h2>
              <h3>
                At the core of ACT Centers mission is the pursuit of research
                categorized by novelty and the potential for significant impact,
                aligning with Thapars commitment to academic excellence. The
                expectation for approved projects is the co-authoring of
                research papers publishable in peer-reviewed academic journals.
                Other forms of outcomes (artistic, practical, educational, etc.)
                could be secondary outcomes of research in the context of the
                ACT Center.
              </h3>
              <div className={styles.buttonContainer}>
                <Button color="#F4970F">Read More</Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <div className={styles.copyright}>
          Copyright Thapar Institute of Engineering and Technology 2024
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
