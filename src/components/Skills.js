import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jsIcon from "../assets/img/jsIcon.png";
import bootstrapIcon from "../assets/img/bootstrap.png";
import jqueryIcon from "../assets/img/jquery.png";
import laravelIcon from "../assets/img/laravel.png";
import mongoDbIcon from "../assets/img/mongodb.png";
import mySqlIcon from "../assets/img/mysql.png";
import nodeIcon from "../assets/img/node-js.png";
import phpIcon from "../assets/img/php.png";
import reactIcon from "../assets/img/react.png";
import sassIcon from "../assets/img/sass.png";
import tailwindIcon from "../assets/img/tailwind.png";
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
                    ? "col-12 animate__animated animate__zoomIn"
                    : "col-12 hidden"
                }
              >
                <h1 className="skills-title">Skills</h1>
                <p className="skills-text">
                  Here you can check out some of my skills
                </p>
                <Carousel responsive={responsive} infinite={true}>
                  <div className="item">
                    <img className="mb-2" src={jsIcon} alt="item" />
                    <h5>Javascript</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={nodeIcon} alt="item" />
                    <h5>Node.js</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={reactIcon} alt="item" />
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={sassIcon} alt="item" />
                    <h5>Sass</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={phpIcon} alt="item" />
                    <h5>PHP</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={laravelIcon} alt="item" />
                    <h5>Laravel</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={tailwindIcon} alt="item" />
                    <h5>Tailwind</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={bootstrapIcon} alt="item" />
                    <h5>Bootstrap</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={mongoDbIcon} alt="item" />
                    <h5>Mongodb</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={jqueryIcon} alt="item" />
                    <h5>Jquery</h5>
                  </div>
                  <div className="item">
                    <img className="mb-2" src={mySqlIcon} alt="item" />
                    <h5>MySql</h5>
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
