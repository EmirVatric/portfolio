import React, { useRef, useEffect } from 'react';
import { TweenMax, Power2 } from 'gsap'
import './Projects.css'

const Projects = (props) => {
  let sectionWrapper = useRef(null)
  useEffect(() => {
    if (props.index.destination !== undefined) {
      if (props.index.destination.index === 3) {
        TweenMax.to(
          sectionWrapper,
          1,
          {
            opacity: 1,
            delay: 0.5,
            ease: Power2.easeOut
          }
        );
      }
    }
  })
  return (
    <div
      ref={el => sectionWrapper = el}
      className='sectionWrapper'>
      <div className='wall'>
        <div className="projectWrapperLeft">
          <div className="project1">
            <div className='descWrapper'>
              <h4>Restaurant administration</h4>
              <p>This is part where we write something about this page.</p>
            </div>
          </div>
          <div className="project3"><div className='descWrapper'>
            <h4>Restaurant administration</h4>
            <p>This is part where we write something about this page.</p>
          </div></div>
          <div className="project5"><div className='descWrapper'>
            <h4>Restaurant administration</h4>
            <p>This is part where we write something about this page.</p>
          </div></div>
        </div>
        <div className="projectWrapperRight">
          <div className="project2"><div className='descWrapper'>
            <h4>Restaurant administration</h4>
            <p>This is part where we write something about this page.</p>
          </div></div>
          <div className="project4"><div className='descWrapper'>
            <h4>Restaurant administration</h4>
            <p>This is part where we write something about this page.</p>
          </div></div>
          <div className="project6"><div className='descWrapper'>
            <h4>Restaurant administration</h4>
            <p>This is part where we write something about this page.</p>
          </div></div>
        </div>
      </div>

    </div>
  );
}

export default Projects;