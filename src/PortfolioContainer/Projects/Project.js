import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import weatherpic from "../../assets/FireShot Capture 005 - Weather App - zerenmetinweatherapp.netlify.app.png";
import netflixpic from "../../assets/FireShot Capture 006 - React App - netflix-clone-dd230.web.app.png";
import commerce from "../../assets/FireShot Capture 007 - React App - esinim.netlify.app.png";
import spend from "../../assets/FireShot Capture 008 - React App - infallible-brown-cad1a5.netlify.app.png";
import { Fade } from "react-awesome-reveal";
const Project = () => {
  return (
    <div className="project">
      <Fade bottom big>
        <div className="project-title">
          <h1>Projects</h1>
        </div>
        <div className="container">
          <div className="project-mid">
            <div className="row">
              <div className="project-all">
                <div className="project-item">
                  <img alt="" src={weatherpic}></img>
                  <span>Weather App</span>
                </div>
                <div className="project-item">
                  <img alt="" src={netflixpic}></img>
                  <span>Netflix Clone</span>
                </div>
                <div className="project-item">
                  <img alt="" src={commerce}></img>
                  <span>E-Commerce</span>
                </div>
                <div className="project-item">
                  <img alt="" src={spend}></img>
                  <span>Spend Money App</span>
                </div>
              </div>
            </div>
            <div className="project-title">
              <h3>And More...</h3>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Project;
