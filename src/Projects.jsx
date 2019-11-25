import React, { useRef, useEffect } from "react";
import { TweenMax, Power2 } from "gsap";
import "./Projects.css";
import github from "./img/github.png";
import demo from "./img/demo.png";

const Projects = props => {
  let sectionWrapper = useRef(null);
  useEffect(() => {
    if (props.index.destination !== undefined) {
      if (props.index.destination.index === 3) {
        TweenMax.to(sectionWrapper, 1, {
          opacity: 1,
          delay: 0.5,
          ease: Power2.easeOut
        });
      }
    }
  });
  return (
    <div ref={el => (sectionWrapper = el)} className="sectionWrapper">
      <div className="heading">
        <h1 className="headingTitle">MY PROJECTS</h1>
      </div>
      <div className="wall">
        <div className="projectWrapperLeft">
          <div className="project1">
            <div className="descWrapper">
              <h4>Royal Furniture</h4>
              <p>
                Website design and 3D models implementation with Webpack and
                THREE.js.
              </p>
              <div className="iconsHolder">
                <a
                  href="https://github.com/EmirVatric/furniture"
                  target="blank"
                >
                  <img src={github} className="github" alt="" />
                </a>
                <a
                  href="https://emirvatric.github.io/RoyalFurniture/"
                  target="blank"
                >
                  <img src={demo} className="demo" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="project3">
            <div className="descWrapper">
              <h4>Skyleet Technologies</h4>
              <p>
                Desktop and Mobile design with AdobeXD and its implementation in
                Webpack.
              </p>
              <div className="iconsHolder">
                <a href="https://github.com/EmirVatric/skyleet" target="blank">
                  <img src={github} className="github" alt="" />
                </a>
                <a href="https://emirvatric.github.io/depl/" target="blank">
                  <img src={demo} className="demo" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="project5">
            <div className="articlesWrapper">
              <h1>Written articles</h1>
              <a
                href="https://medium.com/@vatricemir/variables-in-css-77b2537c649d"
                className="articleLink"
              >
                <h5>Variables in CSS</h5>
              </a>
              <a
                href="https://medium.com/@vatricemir/prototype-basics-javascript-ee79c1ac693e"
                className="articleLink"
              >
                <h5>Prototype basics-JavaScript</h5>
              </a>
              <a
                href="https://medium.com/@vatricemir/background-jobs-in-rail-bb6888267ad5"
                className="articleLink"
              >
                <h5>Background jobs in Rails</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="projectWrapperRight">
          <div className="project2">
            <div className="descWrapper">
              <h4>BookstoreCMS</h4>
              <p>Application for managing books.</p>
              <div className="iconsHolder">
                <a
                  href="https://github.com/EmirVatric/bookstore-cms"
                  target="blank"
                >
                  <img src={github} className="github" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="project4">
            <div className="descWrapper">
              <h4>Complete Restaurant Administration Manager</h4>
              <p>
                Built using Ruby on Rails, PostgreSQL with Action Cable for
                integration on WebSockets, and many more features.
              </p>
              <div className="iconsHolder">
                <a
                  href="https://github.com/EmirVatric/account_ichicken"
                  target="blank"
                >
                  <img src={github} className="github" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="project6">
            <div className="descWrapper">
              <h4>Social Network</h4>
              <p>
                Complete social network made using Ruby on Rails, postgreSQL.
                With tests in Rspec and Capybara.
              </p>
              <div className="iconsHolder">
                <a
                  href="https://github.com/abdellani/final-project"
                  target="blank"
                >
                  <img src={github} className="github" alt="" />
                </a>
                <a
                  href="https://fast-wave-25233.herokuapp.com/ "
                  target="blank"
                >
                  <img src={demo} className="demo" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
