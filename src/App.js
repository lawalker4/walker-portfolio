import React, { useState } from 'react';
import About from '../src/Components/About';
import Projects from '../src/Components/Projects';
import Resume from '../src/Components/Resume';
import Contact from '../src/Components/Contact';

function App() {

  const [pages] = useState([
    'About Me',
    'Projects',
    'Contact',
    'Resume'
  ])

  const [currnetPage, setCurrentPage] = useState(pages[0]);

  return (
    <html>
      <body>
        {currnetPage === 'About Me' && <About />}
        {currnetPage === 'Projects' && <Projects />}
        {currnetPage === 'Contact' && <Contact />}
        {currnetPage === 'Resume' && <Resume />}
      </body>
    </html>
  );
}

export default App;