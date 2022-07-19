import React from 'react';
import headshot from '../../assets/images/headshot.PNG';


function About() {
    return (
    <section className="my-5 text-center">
        <h1 id="about">About Me</h1>
        <img id="photo" src={headshot} alt="headshot" />
  
        <div className='my-2'>
            <p>
             I am a Front End Web Developer with a background in agriculture and education. I recently earned a certificate from the University of Richmond Coding Bootcamp Full Stack Web Development. Where I developed skills in JavaScript, CSS, HTML, React.js and responsive web design. I am an innovative problem-solver passionate about developing apps, with a focus on mobile-first design and development. 
             
             <br></br>
             <br></br>

             My degree in agriculture and many years in the wine industy has prepared me to approach problems head on and deep dive to discover the problem and bring a creative solution to the table. My strengths in project management, teamwork, creativity and building projects from ideation to execution.   
            
            </p>
        </div>
        <div className='icons'>
        </div>
    </section>
  );
}

export default About;