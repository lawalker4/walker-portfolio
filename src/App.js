import React, { useState } from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

function App() {
      const [pages] = useState([
        'About Me',
        'Projects',
        'Resume',
        'Contact'
      ]);
      }
 
const [currentPage, setCurrentPage] = useState(pages[0]);

return(
    <html>
      <Headers
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
      <body>
        {currentPage === 'About Me' && <About />}
        {currentPage === 'Projects' && <Projects />}
        {currentPage === 'Resume' && <Resume />}
        {currentPage === 'Contact Me' && <Contact />}
      </body>
    </html>

);

    
export default App