import React, { useEffect } from "react";
import headerimg from "../assets/img/header-img.svg";
import Typed from "typed.js";
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import TrackVisibility from "react-on-screen";
import "animate.css";

function Banner() {
  useEffect(() => {
    const typed = new Typed(".typing-animation", {
      strings: ["'m a web Developer", "'m a web Designer", "'m a web Enthusiast", `'m in love with code`],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <div className="container-fluid banner-container">
      <div className="row">
        <div className="col-12 col-md-7 col">
          <div className="welcome2MyPortfolio">
            Welcome to my portfolio
          </div>
          <p className="myNameP">Hi! I'm Nimai</p>
          <p>
            I<span className="typing-animation"></span>
          </p>
        </div>
        <div className="col-12 col-md-5">
        <TrackVisibility once={true}>
            {({ isVisible }) => (
              <img
                className={
                  isVisible
                    ? "img-fluid animate__animated animate__zoomIn"
                    : "img-fluid"
                }
                src={headerimg}
                alt="header"
              />
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
}

export default Banner;
