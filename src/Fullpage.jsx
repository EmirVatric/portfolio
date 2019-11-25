import React, { useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Skills from "./Skills";
import Projects from "./Projects";
import { TweenMax, Power3 } from "gsap";
import Contact from "./Contact";

let header;
let aboutMe;
const FullPage = () => (
  (header = useRef(null)),
  (
    <ReactFullpage
      //fullpage options
      licenseKey={"key"}
      scrollingSpeed={1000} /* Options here */
      navigation={true}
      scrollOverflow={true}
      afterLoad={(origin, destination, direction) => {
        if (origin.index === 0 && destination.index !== 1) {
          TweenMax.to(header, 2, {
            opacity: 1,
            y: 50,
            delay: 0.4,
            ease: Power3.easeOut
          });
        }
      }}
      onLeave={(origin, destination, direction) => {
        if (destination.index === 0) {
          TweenMax.to(header, 2, {
            opacity: 1,
            y: 50,
            delay: 0.4,
            ease: Power3.easeOut
          });
        }
        if (origin.index === 0) {
          TweenMax.to(header, 1, {
            opacity: 0,
            y: -50
          });
        }
        if (destination.index === 1) {
          TweenMax.to(aboutMe, 2, {
            opacity: 1,
            y: 50,
            delay: 0.4,
            ease: Power3.easeOut
          });
        }

        if (origin.index === 1) {
          TweenMax.to(aboutMe, 2, {
            opacity: 0,
            y: -50,
            delay: 0.4,
            ease: Power3.easeOut
          });
        }
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section s1">
              <div className="headerSection" ref={el => (header = el)}>
                <h1>
                  Hello, I'm <span className="nameHolder">Emir Vatrić.</span>
                </h1>
                <h1>I'm full-stack web developer.</h1>
                <button
                  className="storieButton"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  SEE MY STORY
                </button>
              </div>
            </div>
            <div className="section s2">
              <div ref={el => (aboutMe = el)} className="wrapper">
                {/*
              <div className='imgWrapper'>
                <img src={profile} alt="Profile" className='profPic' />
              </div>
             */}
                <h1 className="aboutMe">ABOUT ME</h1>
                <p className="storieHolder">
                  I love to code exciting, dynamic and functional websites and
                  applications, enjoy working in a healthy environment and
                  strive to be a good coworker. My main interests are working on
                  Ruby on Rails and NodeJS projects, also i am excited about
                  learning new programming languages. I deliver projects on{" "}
                  <b>time</b>, <b>quality</b> and <b>budget</b>, each project is
                  equally important and each must be met with the same
                  standards. Beside programming I am interested in sports
                  (football, handball, table tennis, chess) and hiking,
                  especially in my home country.
                </p>
                <div className="socials">
                  <span>
                    <a
                      href="https://www.linkedin.com/in/emirvatric/"
                      target="blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </span>
                  <span>
                    <a href="https://github.com/EmirVatric" target="blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </span>
                  <span>
                    <a href="https://www.facebook.com/Vatric" target="blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </span>
                  <span>
                    <a href="https://twitter.com/EmirVatric" target="blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.instagram.com/emir.vatric/"
                      target="blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="section s3">
              <Skills index={state} />
            </div>
            <div className="section s4">
              <Projects index={state} fullpageapi={fullpageApi} />
            </div>
            <div className="section s5">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
);

export default FullPage;
