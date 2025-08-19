import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ScrollService from "../../../utilities/ScrollService";

import "./Profile.css";
function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/vnilesh108/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=mDzGwh63Gbo&t=46s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello I'M <span className="highlighted-name" style={{color: "#ff5733" }}>Nilesh Kumar</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typewriter
                  words={[
                    "Software Engineer 2",
                    "Python Developer",
                    "Django Developer",
                    "Full Stack Web Developer",
                    "Python, Django, React, AWS, API",
                    "AI, Fintech, Cybersecurity, eCommerce"
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and backend operations
              </span>
            </span>
          </div>
          <div className="profile-options">
              <button
                            className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                          >
                            {" "}
                            Hire Me{" "}
            </button>
            <a
              href="Nilesh_Kumar_python_developer_6+years.pdf"
              download="Nilesh_Kumar_python_developer_6+years.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
