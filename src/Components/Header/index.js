import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {currentPage, setCurrentPage} = props;
  
    return (
      <header>
        <h1 className='header-title'>
            Ashley Walker Portfolio
        </h1>
        <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
        </header>
    );
}

export default Header;