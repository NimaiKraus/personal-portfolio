import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter3 from "../assets/img/meter3.svg";
import meter2 from "../assets/img/meter2.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
    <div className="skills" id="skills">
      <div className="container">
        <div className="row">
          <TrackVisibility once={true}>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "col-12 animate__animated animate__flipInX"
                    : "col-12"
                }
              >
                <h1 className="skills-title">Skills</h1>
                <p className="skills-text">
                  Here you can check out some of my skills
                </p>
                <Carousel responsive={responsive} infinite={true}>
                  <div className="item">
                    <img className="mb-2" src={meter3} alt="item" />
                    <h5>Web development</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={meter2} alt="item" />
                    <h5>Problem solving</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={meter3} alt="item" />
                    <h5>Teamwork</h5>
                  </div>
                </Carousel>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
}

export default Skills;
