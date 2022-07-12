import React from 'react';
// import About from './components/About';
import coverImage from "../../assets/cover/cover-image.jpg";


function App() {
    return (
    <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <div className='my-2'>
            <p>
            Loram ipsum
            </p>
        </div>
    </section>
  );
}

export default App;