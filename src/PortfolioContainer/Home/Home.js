import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.css";
import Profile from "./Profile";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div  className="row ">
          <div className="col-md-4">
            <h1 className="nav-logo">I'm METİN!</h1>
          </div>
          <div className="col-md-8">
            <div className="links">
              <ul className="nav-links-u">
                <li className="nav-links-l">
                  <Link to="about" style={{cursor:"pointer"}} smooth={true} duration={800}>
                    About Me
                  </Link>
                  <Link to="skills" style={{cursor:"pointer"}} smooth={true} duration={800}>
                    Skills
                  </Link>
                  <Link to="project" style={{cursor:"pointer"}} smooth={true} duration={800}>
                    Projects
                  </Link>
                  <Link to="contact" style={{cursor:"pointer"}} smooth={true} duration={800}>
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Profile />
    </div>
  );
};
