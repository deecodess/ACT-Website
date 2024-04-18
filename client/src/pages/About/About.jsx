import { Fragment, useState } from "react";
import { useEffect } from "react";
import styles from "./About.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../Landing/Carousel";
import { Data } from "./Data";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);

  return (
    <Fragment>
      <Navbar />
      <div className={styles.aboutWrapper}>
        <Header title="About" desc="For you to get to know us better" />
        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={() => setShowDropdown1(!showDropdown1)}
          >
            ABOUT US
          </button>
          {showDropdown1 && (
            <div className={styles.dropdownContent}>
              <div className={styles.content}>
                ACT Center strategically aims to instigate and promote
                transdisciplinary research within the Thapar Institute of
                Engineering and Technology. This goal aligns with the Thapar
                Institute’s commitment to staff personal and professional
                development, and the goal of advancing and disseminating
                academic knowledge in domains related to the institute’s
                scientific domains. By achieving these goals Thapar Institute
                aims at obtaining a prominent position as a technological
                university in India and internationally.
              </div>
              <div className={styles.content}>
                The ACT Center extends an invitation to all academic personnel
                to actively engage in this initiative by identifying
                transdisciplinary research topics connecting with colleagues
                from diverse knowledge domains and proposing projects that
                promise novel and high-quality publications.
              </div>
              <div className={styles.content}>
                To ensure the depth and breadth of transdisciplinary engagement,
                the ACT Center stipulates that a minimum of three disciplines
                must be involved in the proposal to be eligible for financial
                support. This requirement underscores our commitment to
                fostering truly integrative research endeavors that contribute
                meaningfully to the collective pursuit of knowledge and the
                common good.
              </div>
            </div>
          )}
        </div>

        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={() => setShowDropdown2(!showDropdown2)}
          >
            WHAT IS TRANSDISCIPLINARY RESEARCH
          </button>
          {showDropdown2 && (
            <div className={styles.dropdownContent}>
              <a
                href="https://transdisciplinarity.ch/en"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.content}
              >
                Call for Transdisciplinary Research Proposals
              </a>
            </div>
          )}
        </div>

        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={() => setShowDropdown3(!showDropdown3)}
          >
            PEOPLE
          </button>
          {showDropdown3 && (
            <div className={styles.dropdownContent}>
              <Carousel data={Data} />
            </div>
          )}
        </div>

        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={() => setShowDropdown4(!showDropdown4)}
          >
            VIDEOS
          </button>
          {showDropdown4 && (
            <div className={styles.dropdownContent}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bBIQRofPSpE?modestbranding=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TUBuj81FL5A?modestbranding=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <div className={styles.buttonContainer} data-aos="fade-up">
          <Button color="#F4970F">Submissions</Button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
