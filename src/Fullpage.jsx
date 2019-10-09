import React, { useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Skills from './Skills';
import Projects from './Projects'
import { TweenMax, Power3 } from 'gsap'
let header
let aboutMe
const FullPage = () =>
  (
    header = useRef(null),


    < ReactFullpage
      //fullpage options
      licenseKey={'key'}
      scrollingSpeed={1000} /* Options here */
      navigation={true}
      scrollOverflow={true}
      normalScrollElements={'.s4'}
      afterLoad={(origin, destination, direction) => {
        if (origin.index === 0 && destination.index !== 1) {
          TweenMax.to(
            header,
            2,
            {
              opacity: 1,
              y: 50,
              delay: 0.4,
              ease: Power3.easeOut
            }
          )
        }
      }}
      onLeave={(origin, destination, direction) => {
        if (destination.index === 0) {
          TweenMax.to(
            header,
            2,
            {
              opacity: 1,
              y: 50,
              delay: 0.4,
              ease: Power3.easeOut
            }
          )
        }
        if (origin.index === 0) {
          TweenMax.to(
            header,
            1,
            {
              opacity: 0,
              y: -50
            }
          )
        }
        if (destination.index === 1) {
          TweenMax.to(
            aboutMe,
            2,
            {
              opacity: 1,
              y: 50,
              delay: 0.4,
              ease: Power3.easeOut
            }
          )
        }

        if (origin.index === 1) {
          TweenMax.to(
            aboutMe,
            2,
            {
              opacity: 0,
              y: -50,
              delay: 0.4,
              ease: Power3.easeOut
            }
          )
        }
      }}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section s1">
              <div
                className='headerSection'
                ref={el => header = el}
              >
                <h1>Hello, I'm <span className='nameHolder'>Emir Vatrić.</span></h1>
                <h1>I'm full-stack web developer.</h1>
                <button className='storieButton' onClick={() => fullpageApi.moveSectionDown()}>
                  SEE MY STORIE
                </button>
              </div>
            </div>
            <div className="section s2">
              <div
                ref={el => aboutMe = el}
                className='wrapper'>
                { /*
              <div className='imgWrapper'>
                <img src={profile} alt="Profile" className='profPic' />
              </div>
             */}
                <h1 className='aboutMe'>ABOUT ME</h1>
                <p className='storieHolder'>My storie is not a simple one, but it is an interesing one!
                A <b>storie</b> about a guy whose hobby overtook all of his free time, a storie about a guy who found his true calling.
                                                                                                                                                                                                                                                                                    I absolutely love to code exciting, dynamic and functional websites and applications. I like beeing in competitive enviroment,
                <b>working hard</b> for employer who can recognize my desire to learn and advance in many different fields in bouth <b>front-end</b> and <b>back-end</b>.
              </p>
              </div>

            </div>
            <div className="section s3">
              <Skills index={state} />
            </div>
            <div
              className="section s4">
              <Projects index={state} fullpageapi={fullpageApi} />
            </div>
            <div className="section s5">

            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

export default FullPage