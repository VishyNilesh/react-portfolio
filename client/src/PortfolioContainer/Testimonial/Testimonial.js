import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lady.jpeg";
import Anand from "../../../src/img/Testimonial/Anand.jpeg";
import Vivek from "../../../src/img/Testimonial/Vivek.jpeg";
import man from "../../../src/img/Testimonial/man.jpeg";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"Linkedin Recommendation's"}
      />

      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={true}
            transitionDuration={3000}
            containerClass="testimonial-carousel"
            itemClass="carousel-item-padding-40-px"
          >
            {/* Testimonial 1 */}
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                  <i className="fa fa-quote-left" />
                  Nilesh is an outstanding Software Engineer III who brings deep
                  Python/Django expertise and strong AWS/API skills to every
                  project. He consistently delivered robust, production-ready
                  features on time, thought through architectural tradeoffs, and
                  helped the team improve reliability and deployment processes.
                  He’s collaborative, proactive about solving problems, and a
                  pleasure to work with him
                  <i className="fa fa-quote-right" />
                </p>
                <ul className="stars list-unstyled">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-half-alt" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
              </div>
              <div className="client-info">
                <img src={lady} alt="testimonial" />
                <h5>Sakshi Badoni @Databook</h5>
                <p>Python Developer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                  <i className="fa fa-quote-left" />
                  It was a great decision hiring Nilesh for frontend operations
                  at IndiaBonds. He went beyond expectations by not only
                  completing the assigned tasks but also suggesting and
                  implementing improvements that enhanced the overall user
                  experience. His attention to detail, commitment to quality,
                  and ability to deliver on time made a big difference to the
                  project’s success. I would highly recommend Nilesh for any
                  frontend development role—he brings both technical skills and
                  reliability to the table.
                  <i className="fa fa-quote-right" />
                </p>
                <ul className="stars list-unstyled">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-half-alt" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
              </div>
              <div className="client-info">
                <img src={Vivek} alt="testimonial" />
                <h5>Vivek Vishwakarma @Deloitte</h5>
                <p>Lead Software Engineer </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            {/* <div className="testi-item">
              <div className="testi-comment">
                <p>
                  <i className="fa fa-quote-left" />
                  When he delivered my job, my head spun — it was so nice and he
                  implemented every functionality I requested. Thank you!
                  <i className="fa fa-quote-right" />
                </p>
                <ul className="stars list-unstyled">
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star-half-alt" /></li>
                  <li><i className="fa fa-star" /></li>
                </ul>
              </div>
              <div className="client-info">
                <img src={lady} alt="testimonial" />
                <h5>Daisy Dominic</h5>
                <p>CEO InansGlobal</p>
              </div>
            </div> */}

            {/* Testimonial 4 */}
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                  <i className="fa fa-quote-left" />
                  I had the privilege of working with Nilesh and was impressed
                  by his expertise as a Python web developer. His strong command
                  of Django, Flask, and API integration played a key role in
                  building robust, high-performance applications. Nilesh’s clean
                  coding practices, problem-solving skills, and collaborative
                  approach made him an invaluable team member.
                  <i className="fa fa-quote-right" />
                </p>
                <ul className="stars list-unstyled">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-half-alt" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
              </div>
              <div className="client-info">
                <img src={man} alt="testimonial" />
                <h5>Sumit Pal @FCI CCM</h5>
                <p>Cloud & Devops Engineer</p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <div className="footer-image">
        <img src={shape} />
      </div>
    </div>
  );
}
