import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skill.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";

const Skills = () => {

  return (
    <div className="skills">
      <Fade>
        <div className="skill-title">
          <h1>Skills</h1>
        </div>
        <div className="container">
          <div className="row">
              <div>
                <div className="bg">
                  <div className="caro-flex">
                    <div className="skill-parent">
                      <div className="heading-bullet"></div>
                      <span>JavaScript</span>
                      <div className="skill-parcengete">
                        <div
                          style={{ width: "80%" }}
                          className="active-parcengete"
                        ></div>
                      </div>
                    </div>
                    <div className="skill-parent">
                      <div className="heading-bullet"></div>
                      <span>React Js</span>
                      <div className="skill-parcengete">
                        <div
                          style={{ width: "90%" }}
                          className="active-parcengete"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="caro-flex">
                    <div className="skill-parent">
                      <div className="heading-bullet"></div>
                      <span>Html</span>
                      <div className="skill-parcengete">
                        <div
                          style={{ width: "85%" }}
                          className="active-parcengete"
                        ></div>
                      </div>
                    </div>
                    <div className="skill-parent">
                      <div className="heading-bullet"></div>
                      <span>Css</span>
                      <div className="skill-parcengete">
                        <div
                          style={{ width: "85%" }}
                          className="active-parcengete"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
