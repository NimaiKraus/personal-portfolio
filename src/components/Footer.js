import React from "react";
import myLogo from "../assets/img/myLogoWhite.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="row footerMainRow">
          <div className="col-12 col-md-4">
            <img src={myLogo} className="img-fluid" alt="logo" />
          </div>
          <div className="col-12 col-md-8">
            <div className="row sectionsRow">
              <div className="col-6 col-md-4">
                <h3>Contacts</h3>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pergliamicimimo/">Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nimai-kraus-sviluppo-web/">Linkedin</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/NimaiKraus">Github</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h3>Sections</h3>
                <ul>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact me</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row newsletterRow">
              <div className="col-12 col-md-9">
                <label htmlFor="footer-textarea" className="form-label">
                  Subscribe to our newsletter
                </label>
                <textarea id="footer-textarea" placeholder="Write your email..." />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <p className="text-center fw-bold">
              ©️ All rights reserved to me, myself and I...
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
