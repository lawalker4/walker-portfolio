import React from 'react';
import Nav from '../Nav';
import coverImage from "../../assets/cover/cover-image.jpg";


function Header(props) {
    const {currentPage, setCurrentPage} = props;
  
    return (
      <header>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  
        <h1 className='header-title text-center'>
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