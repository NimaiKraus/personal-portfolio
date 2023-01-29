import React from "react";
import dashboardScreen from "../assets/img/dashboardScreen.png";
import livechatScreen from "../assets/img/livechatScreen.png";
import realEstateScreen from "../assets/img/realEstateScreen.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

const projects = [
  {
    title: "live chat application",
    description:
      "A project realized with react, tailwind and chat engine components.",
    img: livechatScreen,
    url: "https://nimai-react-chat-app.netlify.app/",
  },
  {
    title: "real estate application",
    description:
      "A project realized with react, next.js using SSR and SSG and chakra ui.",
    img:  realEstateScreen,
    url: "https://real-estate-next-app-steel.vercel.app/",
  },
  {
    title: "admin dashboard",
    description:
      "An admin dashboard realized with react and syncfusion components with a lot of functionalities.",
    img: dashboardScreen,
    url: "https://nimai-syncfusion-react-dashboard.netlify.app/",
  },
];

function Projects() {
  return (
    <div className="container projects-container" id="projects">
      <TrackVisibility once={true} >
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__flipInX" : "hidden"}>
            <div className="row">
              <h1 className="projects-header">Projects</h1>
              <p className="projects-text">
                Here you can check out some of my projects
              </p>
              {projects.map((project, index) => {
                return (
                  <div key={index} className="col-12 col-md-4">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <div className="project-card">
                        <img
                          src={project.img}
                          className="card-img"
                          alt="project"
                        />
                        <div className="card-context">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="card-desc">{project.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  );
}

export default Projects;
