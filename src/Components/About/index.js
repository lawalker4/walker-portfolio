import React from 'react';
import headshot from '../../assets/images/headshot.PNG';


function About() {
    return (
    <section className="my-5 text-center">
        <h1 id="about">About Me</h1>
        <img id="photo" src={headshot} alt="headshot" />
  
        <div className='my-2'>

            <p>
            
            </p>
        </div>
        <div className='icons'>
        </div>
    </section>
  );
}

export default About;