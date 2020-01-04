import React, { useRef, useEffect } from "react";
import "./Skills.css";
import frontSvg from "./img/frontend.png";
import backSvg from "./img/backgend.png";
import reactSvg from "./img/reactLogo.svg";
import angularPng from "./img/angular.png";
import htmlPng from "./img/html.png";
import cssPng from "./img/css.png";
import bootstrapPng from "./img/bootstrap.png";
import jsPng from "./img/js.png";
import railsPng from "./img/rails.png";
import nodePng from "./img/node.png";
import postgrePNG from "./img/postgresql.png";
import mongoPNG from "./img/mongo.png";
import jqueryPNG from "./img/jquery.gif";
import gitPNG from "./img/git.png";
import { TweenMax, Power3 } from "gsap";
const Skills = props => {
  let wrapper = useRef(null);
  useEffect(() => {
    if (props.index.destination !== undefined) {
      if (props.index.origin.index === 2) {
        TweenMax.to(wrapper, 1, {
          opacity: 0,
          y: 0,
          ease: Power3.easeOut
        });
      }
      if (props.index.destination.index === 2) {
        TweenMax.to(wrapper, 3, {
          opacity: 1,
          y: 50,
          delay: 0.4,
          ease: Power3.easeOut
        });
      }
    }
  });
  return (
    <div ref={el => (wrapper = el)} className="skillsWrapper">
      <div className="side border">
        <img src={frontSvg} className="front-icon" alt="frontend-icon" />
        <h2>Front-end Developer</h2>
        <p className="description">
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <div className="languages">
          <div className="language">
            <div className="logoWrapper">
              <img src={reactSvg} alt="react-Logo" />
            </div>
            <span>ReactJS</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={angularPng} alt="angular-Logo" />
            </div>
            <span>Angular 2+</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={htmlPng} alt="html-Logo" />
            </div>
            <span>HTML</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={cssPng} alt="css-Logo" />
            </div>
            <span>CSS</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={bootstrapPng} alt="bootstrap-Logo" />
            </div>
            <span>Bootstrap</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={jqueryPNG} alt="jquery-Logo" />
            </div>
            <span>jQuery</span>
          </div>
        </div>
      </div>
      <div className="side">
        <img src={backSvg} className="front-icon" alt="frontend-icon" />
        <h2>Back-end Developer</h2>
        <p className="description">
          I like clean code and algorithmic solutions, and enjoy bringing ideas
          to life in the browser.
        </p>
        <div className="languages">
          <div className="language">
            <div className="logoWrapper">
              <img src={railsPng} alt="rails-Logo" />
            </div>
            <span>Ruby on Rails</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={nodePng} alt="node-Logo" />
            </div>
            <span>Node.js</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={postgrePNG} alt="postgresql-Logo" />
            </div>
            <span>PostgreSQL</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={mongoPNG} className="mongo" alt="mongodb-Logo" />
            </div>
            <span>MongoDB</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={jsPng} alt="javascript-Logo" />
            </div>
            <span>JavaScript</span>
          </div>
          <div className="language">
            <div className="logoWrapper">
              <img src={gitPNG} alt="git-Logo" />
            </div>
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
