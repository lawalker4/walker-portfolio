import React from 'react';

function Nav(props) {
  const {
    currentPage,
    setCurrentPage
  } = props;

  return (
       <nav className="nav-links">
        <p className={`link ${'About Me' === currentPage && 'nav-active'}`} id="about-me">
          <span className='nav-link' onClick={() => setCurrentPage ('About Me')}>About Me</span>
        </p>
        <p className={`link ${'About Me' === currentPage && 'nav-active'}`} id="projects">
          <span className='nav-link' onClick={() => setCurrentPage ('Projects')}>Projects</span>
        </p>
        <p className={`link ${'About Me' === currentPage && 'nav-active'}`} id="resume">
          <span className='nav-link' onClick={() => setCurrentPage ('Resume')}>Resume</span>
        </p>
        <p className={`link ${'About Me' === currentPage && 'nav-active'}`} id="contact">
          <span className='nav-link' onClick={() => setCurrentPage ('Contact')}>Contact</span>
        </p>
       </nav>

  );
}

export default Nav;