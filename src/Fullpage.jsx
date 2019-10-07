import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const FullPage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'key'}
    scrollingSpeed={1000} /* Options here */
    navigation={true}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section s1">
            <h1>Hello, I'm <span className='nameHolder'>Emir Vatrić.</span></h1>
            <h1>I'm full-stack web developer.</h1>
            <button className='storieButton' onClick={() => fullpageApi.moveSectionDown()}>
              SEE MY STORIE
            </button>
          </div>
          <div className="section s2">
            <div className='wrapper'>
              <h1 className='aboutMe'>ABOUT ME</h1>
              <p className='storieHolder'>My storie is not a simple one, but it is an interesing one!
                A <b>storie</b> about a guy whose hobby overtook all of his free time, a storie about a guy who found his true calling.
                      I absolutely love to code exciting, dynamic and functional websites and applications. I like beeing in competitive enviroment,
                <b>working hard</b> for employer who can recognize my desire to learn and advance in many different fields in bouth <b>front-end</b> and <b>back-end</b>.
              </p>
            </div>

          </div>
          <div className="section s3">
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullPage