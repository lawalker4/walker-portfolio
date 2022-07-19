import React, { useState } from 'react';
import About from '../src/Components/About';
import Projects from '../src/Components/Projects';
import Resume from '../src/Components/Resume';
import Contact from '../src/Components/Contact';
import Header from '../src/Components/Header';
import Footer from './Components/Footer';

function App() {

  const [pages] = useState([
    'About Me',
    'Projects',
    'Contact',
    'Resume'
  ])

  const [currnetPage, setCurrentPage] = useState(pages[0]);
  console.log(currnetPage)
  return (
    <>
     <Header
      currnetPage={currnetPage}
      setCurrentPage={setCurrentPage}
      />

      <div>
        {currnetPage === 'About Me' && <About />}
        {currnetPage === 'Projects' && <Projects />}
        {currnetPage === 'Contact' && <Contact />}
        {currnetPage === 'Resume' && <Resume />}
      </div>
      <Footer/>
      </>
  );
}

export default App;