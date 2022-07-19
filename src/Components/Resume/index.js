import React from 'react';
import resume from '../../assets/resume.pdf';

function Resume() {

  return (
  <section className="resume-container">

    <div className="resume-section">
        <p> Download and take take a look my résumé <a id="resume-link" href={resume}>here.</a>
        </p>
        </div>
        <div className="skills">
        <div className="list">
        
        <h2>Front-End Skills</h2>
        <p className="bullet-list">
        <span>&#45;</span>html
         <br />
        <span>&#45;</span>CSS
         <br />
        <span>&#45;</span>JavaScript
         <br />
        <span>&#45;</span>JQuery
         <br />
        <span>&#45;</span>React
         <br />
        </p>
     </div>

    <div className="list">
        <h2>Front-End Skills</h2>
         <p className="bullet-list">
            <span>&#45;</span>Node.js
              <br />
            <span>&#45;</span>Express.js
              <br />
            <span>&#45;</span>MongoDB
              <br />
            <span>&#45;</span>SQL
              <br />
            <span>&#45;</span>API's
              <br />
            <span>&#45;</span>Handlebars
              <br />
            <span>&#45;</span>Sequelize
              <br />
          </p>
        </div>
      </div>
    </section>
   )
}

export default Resume;