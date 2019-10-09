import React from 'react';
import './Projects.css'

const Projects = () => {
  return (
    <div>
      <div className='heading'>
        <h1>My Projects</h1>
      </div>
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