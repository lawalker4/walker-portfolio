import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {
    return (
    <section className="my-5">
        <div className="about-me-content">
        <h1 id="about">Who am I?</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
        <div className='my-2'>
            <p>
            Loram ipsum
            <br>
            Loram ipsum
            </br>
            </p>
        </div>
    </section>
  );
}

export default About;