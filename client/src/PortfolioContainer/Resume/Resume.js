import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
{ skill: "Python", ratingPercentage: 90 },
{ skill: "JavaScript (Vanilla, DOM)", ratingPercentage: 85 },
{ skill: "Django", ratingPercentage: 85 },
{ skill: "REST APIs / DRF", ratingPercentage: 80 },
{ skill: "React / Bootstrap", ratingPercentage: 85 },
{ skill: "PostgreSQL / MongoDB", ratingPercentage: 75 },
{ skill: "Redis (Caching)", ratingPercentage: 70 },
{ skill: "RabbitMQ", ratingPercentage: 70 },
{ skill: "AWS (S3, EC2) / Azure Blob", ratingPercentage: 70 },
{ skill: "Jenkins", ratingPercentage: 75 },
{ skill: "Docker / Kubernetes", ratingPercentage: 70 },
{ skill: "Git", ratingPercentage: 80 },
{ skill: "WordPress / PHP", ratingPercentage: 70 },

  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Mobile E-shop ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Mumbai, India"}
        subHeading={
          "Bachelor’s Degree in Computer Science & Information Technology"
        }
        fromDate={"2013"}
        toDate={"2017"}
      />

      <ResumeHeading
        heading={"S.K Somaiya, India"}
        subHeading={"High School Graduation / Grade 12"}
        fromDate={"2011"}
        toDate={"2013"}
      />
      <ResumeHeading
        heading={"B.P.E.S High School, India"}
        subHeading={"Secondary Education / Grade 10"}
        fromDate={"1999"}
        toDate={"2011"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={
            <a
              href="https://www.databook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0073e6", textDecoration: "none" }}
            >
              Databook
            </a>
          }
          subHeading={"Python Engineer"}
          fromDate={"2025"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <a href="https://databook.com/databookai/">
              Deckbot
            </a>
             &nbsp;|&nbsp;
             <a href="https://databook.com/release/deck-generation-agent/">
              Agent LLM-Powered Deck Generation
            </a>
          </span>
        </div>
        {/* <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div> */}
      </div>
      {/* forcepoint */}
      <div className="experience-container">
       <ResumeHeading
          heading={
            <a
              href="https://www.forcepoint.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0073e6", textDecoration: "none" }}
            >
              Forcepoint
            </a>
          }
          subHeading={"Software Engineer - II"}
          fromDate={"2023"}
          toDate={"2025"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
             <a href="https://www.forcepoint.com/product/casb-cloud-access-security-broker">
             CASB
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.forcepoint.com/product/dlp-data-loss-prevention">
             DLP
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.forcepoint.com/product/data-security-posture-management-dspm">
             Forcepoint DSPM
            </a>
          </span>
        </div>
      </div>
      <div className="experience-container">
       <ResumeHeading
          heading={
            <a
              href="https://www.indiabonds.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0073e6", textDecoration: "none" }}
            >
              IndiaBonds
            </a>
          }
          subHeading={"IndiaBonds"}
          fromDate={"2022"}
          toDate={"2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
             <a href="https://www.indiabonds.com/public-issue/">
             BOND IPO
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.indiabonds.com/refer_and_earn/">
             Refer & Earn
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.indiabonds.com/careers/">
             Carrers Portal
            </a>
             &nbsp;|&nbsp;
            <a href="https://www.indiabonds.com/bond-directory/">
             BONDS Directory
            </a>
          </span>
        </div>
      </div>
      <div className="experience-container">
       <ResumeHeading
          heading={
            <a
              href="https://www.tcs.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0073e6", textDecoration: "none" }}
            >
              TATA CONSULTANCY SERVICES
            </a>
          }
          subHeading={"System Engineer"}
          fromDate={"2019"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
             <a href="https://www.coop.ch/en/">
             COOP
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.informa.com/">
             Ascential/Informa
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.incometax.gov.in/">
             Income Tax Portal  
            </a>
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
        <div className="experience-container">
        <ResumeHeading
          heading={
           "Deckbot | Agent LLM-Powered Deck Generation"
          }
          subHeading={"Python, PostgreSQL, JSON, AWS, Data Structures, Rest APIs"}
          fromDate={"2025"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <a href="https://databook.com/databookai/">
              Deckbot
            </a>
             &nbsp;|&nbsp;
             <a href="https://databook.com/release/deck-generation-agent/">
              Agent LLM-Powered Deck Generation
            </a>
          </span>
        </div>
        {/* <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div> */}
      </div>
      {/* forcepoint */}
      <div className="experience-container">
       <ResumeHeading
          heading={
          "CASB | DLP | Forcepoint DSPM"
          }
          subHeading={"Python, Django, Flask, Docker, Jenkins, React, MongoDB"}
          fromDate={"2023"}
          toDate={"2025"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
             <a href="https://www.forcepoint.com/product/casb-cloud-access-security-broker">
             CASB
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.forcepoint.com/product/dlp-data-loss-prevention">
             DLP
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.forcepoint.com/product/data-security-posture-management-dspm">
             Forcepoint DSPM
            </a>
          </span>
        </div>
      </div>
      <div className="experience-container">
       <ResumeHeading
          heading={
           "BOND IPO |  Refer & Earn | Carrers Portal | BONDS Directory"
          }
          subHeading={"Python, Django, DRF, RestAPIs, Jinja2, WebAPP"}
          fromDate={"2022"}
          toDate={"2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
             <a href="https://www.indiabonds.com/public-issue/">
             BOND IPO
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.indiabonds.com/refer_and_earn/">
             Refer & Earn
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.indiabonds.com/careers/">
             Carrers Portal
            </a>
             &nbsp;|&nbsp;
            <a href="https://www.indiabonds.com/bond-directory/">
             BONDS Directory
            </a>
          </span>
        </div>
      </div>
      <div className="experience-container">
       <ResumeHeading
          heading={
          "COOP | Ascential (Informa) | Income Tax Portal"
          }
          subHeading={"Python, Django, DRF, PostgreSQL, JS, HTML, CSS, React, Git, AWS"}
          fromDate={"2019"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
             <a href="https://www.coop.ch/en/">
             COOP
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.informa.com/">
             Ascential (Informa)
            </a>
             &nbsp;|&nbsp;
             <a href="https://www.incometax.gov.in/">
             Income Tax Portal  
            </a>
          </span>
        </div>
      </div>
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in chess games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
