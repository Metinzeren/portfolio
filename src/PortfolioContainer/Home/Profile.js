import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Profile.css";
import image from "./res.jpg";
import Typical from "react-typical";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Profile = () => {
 

  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="profile-mid">
            <div className="col-md-6">
              <div className="profile-left">
                <div>
                  <h3>
                    Hello, I'm <strong>Metin</strong>
                  </h3>
                </div>

                <div className="profile-left-rush">
                  <h2 className="move">
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Wep Developer!💻  ",
                        1500,
                        "FrontEnd! 🩸",
                        1500,
                        "React Lover🔴",
                        1500,
                      ]}
                    />
                  </h2>
                </div>
                <span>The ability to design the front of websites</span>
                <div className="profile-button">
                  <a href="https://www.linkedin.com/in/metin-zeren-568528177/"><button >Hire Me!</button></a>
                  <a href="/src/metinCV.pdf" download="Metin cv.pdf">
                    <button >Get Resume</button>
                  </a>
                </div>
                <div className="profile-icons">
                  <a href="https://www.linkedin.com/in/metin-zeren-568528177/"><FaLinkedin className="profile-icon" /></a>
                  <a href="https://www.instagram.com/metinzeren_/"><FaInstagram/></a>
                  <a href="https://github.com/Metinzeren?tab=repositories"><FaGithub/></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-right">
                <div className="profile-right-pic">
                  <img alt="" src={image}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
