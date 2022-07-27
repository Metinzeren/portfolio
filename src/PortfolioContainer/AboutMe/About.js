import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <div  className="about">
      <Fade bottom big>
        <div className="about-title">
          <h1>About Me</h1>
        </div>

        <div className="container">
          <div className="about-mid">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://www.pngplay.com/wp-content/uploads/13/Programmer-PNG-Photo-Image.png"
                  alt=""
                ></img>
              </div>
              <div className="col-md-6">
                <div className="about-right">
                  <ul>
                    <li>
                      <div className="deneme">
                        <div className="highlight"></div>
                        <p>I'm a frontend developer</p>
                      </div>
                      <div className="deneme">
                        <div className="highlight"></div>
                        <p>I am currently studying computer programming</p>{" "}
                      </div>
                      <div className="deneme">
                        <div className="highlight"></div>
                        <p>
                          I improved myself on Html, Css, JavaScript and ReactJs
                        </p>
                      </div>
                      <div className="deneme">
                        <div className="highlight"></div>
                        <p>
                          I got my university education at Yıldırım Beyazıt
                          University.
                        </p>
                      </div>
                      <div className="deneme">
                        <div className="highlight"></div>
                        <p>My third education is Anadolu university</p>
                      </div>
                      <div className="deneme">
                        <div className="highlight"></div>
                        <p>
                          Respectful of his job and extremely hungry to learn
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
