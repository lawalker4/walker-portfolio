import React, { useState } from "react";
import Footer from "../Footer";

const Projects = ({ category }) => {
    const [projects] = useState ([
        {
            name: "The Recipe Pantery",
            project: category,
            description:
            "This application allows users to store food and drink recipes in one place. Users can also comment on other user's recipes.",
            link:"https://shrouded-gorge-64455.herokuapp.com/",
            githublink:"https://github.com/charliebear2000/Food-andDrink-DB",
        },
        {
            name: "Brews for Bootcampers",
            project: category,
            description:
            "This is an application that can have the clients pick a brewery and get directions to the brewy of their choice. They will also have the abilit to save their search results to their local storage.",
            link:"https://lawalker4.github.io/date-night-for-bootcampers/",
            githublink:"https://github.com/lawalker4/date-night-for-bootcampers",
        },
        {
            name: "Professional README Generator",
            project: category,
            description:
            "This application has been created to help coders create a great README. They have to answer a few questions and there README has been generated.",
            link:"https://github.com/lawalker4/readme-generator",
            githublink:"https://github.com/lawalker4/readme-generator",
        },
        {
            name: "Note Taker",
            project: category,
            description:
            "Using Express.js this application, called Note Taker, will allow you to save and retrieve notes that you have saved on your application.",
            link:"https://ancient-island-85133.herokuapp.com/",
            githublink:"https://github.com/lawalker4/notetaker",
        },
        {
            name: "Social Network API",
            project: category,
            description:
            "Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js (Links to an external site.) and Mongoose (Links to an external site.) packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.",
            link:"https://github.com/lawalker4/thesocialapi/",
            githublink:"https://github.com/lawalker4/thesocialapi",
        },
        {
            name: "Password Generator",
            project: category,
            description:
            "I created a password generator using JavaScript. I created a password that is 8-128 characters long. Giving the client the ability to pick between symbols, numbers and case choice. ",
            link:"https://github.com/lawalker4/js-passwordgenerator",
            githublink:"https://github.com/lawalker4/js-passwordgenerator",
        },
        {
            name: "Work Day Scheduler",
            project: category,
            description:
            "Third-Party APIs Challenge: Work Day Scheduler",
            link:"https://github.com/lawalker4/workday-schedule",
            githublink:"https://github.com/lawalker4/workday-schedule",
        },
     
    ]);

    const currentProjects = projects.filter((project) => project);
    return (
      <div>
        <div className="flex-row">
          {currentProjects.map((image, i) => (
            //make image a link
            <div className="col-md-6 col-sm-12 col-lg-4 text-center">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                {image.name}
                </a>
                </div>
        ))}
      </div>
    </div>
  );


};

                        


export default Projects;