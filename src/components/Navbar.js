import React, { useState, useEffect } from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import myLogoResized from "../assets/img/myLogoWhiteResized.png";

function MyNavbar() {
  const [activeLink, setActiveLink] = useState("");
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    };
  }, []);
  return (
    <nav
      className={
        scrollY > 50
          ? "navbar navbar-expand-lg bg-navbar shadow"
          : "navbar navbar-expand-lg bg-transparent"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="img-fluid" src={myLogoResized} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                onClick={() => setActiveLink("skills")}
                className={
                  activeLink === "skills" ? "nav-link active" : "nav-link"
                }
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setActiveLink("project")}
                className={
                  activeLink === "project" ? "nav-link active" : "nav-link"
                }
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setActiveLink("contact")}
                className={
                  activeLink === "contact" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="#contact"
              >
                Contact me
              </a>
            </li>
          </ul>
          <div className="social-icons-wrapper">
            <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/NimaiKraus">
              <BsGithub />
            </a>
            <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/pergliamicimimo/">
              <BsInstagram />
            </a>
            <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nimai-kraus-sviluppo-web/">
              <BsLinkedin />
            </a>
          </div>
          <button className="connect-btn">Let's connect</button>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
