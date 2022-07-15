import React from 'react';
import Footer from '../Footer';
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {
    return (
    <section className="my-5">
        <h1 id="about">About Me</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  
        <div className='my-2'>
            <p>
            Loram ipsum
            </p>
        </div>
        <div className='icons'>
            <Footer/>
        </div>
    </section>
  );
}

export default About;