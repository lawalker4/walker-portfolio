import React, { useState } from "react";
import Modal  from "../Modal";


import recipepantry from '../../assets/images/recipepantry.JPG'
import brews from '../../assets/images/brews.JPG'
import notetaker from '../../assets/images/notetaker.JPG'
import password from '../../assets/images/password.JPG'
import workday from '../../assets/images/workday.JPG'
import weatherdashboard from '../../assets/images/weatherdashboard.JPG'


const Projects = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();
 
  const [photos] = useState([
    {
      name: "The Recipe Pantery",
      image_path: recipepantry,
      project: category,
      description:
        "This application allows users to store food and drink recipes in one place. Users can also comment on other user's recipes.",
      link: "https://shrouded-gorge-64455.herokuapp.com/",
      githublink: "https://github.com/charliebear2000/Food-andDrink-DB",
    },
    {
      name: "Brews for Bootcampers",
      image_path: brews,
      project: category,
      description:
        "This is an application that can have the clients pick a brewery and get directions to the brewy of their choice. They will also have the abilit to save their search results to their local storage.",
      link: "https://lawalker4.github.io/date-night-for-bootcampers/",
      githublink: "https://github.com/lawalker4/date-night-for-bootcampers",
    },
    {
      name: "Note Taker",
      image_path: notetaker,
      project: category,
      description:
        "Using Express.js this application, called Note Taker, will allow you to save and retrieve notes that you have saved on your application.",
      link: "https://ancient-island-85133.herokuapp.com/",
      githublink: "https://github.com/lawalker4/notetaker",
    },
    {
      name: "Password Generator",
      image_path: password,
      project: category,
      description:
        "I created a password generator using JavaScript. I created a password that is 8-128 characters long. Giving the client the ability to pick between symbols, numbers and case choice. ",
      link: "https://github.com/lawalker4/js-passwordgenerator",
      githublink: "https://github.com/lawalker4/js-passwordgenerator",
    },
    {
      name: "Work Day Scheduler",
      image_path: workday,
      project: category,
      description:
        "Third-Party APIs Challenge: Work Day Scheduler",
      link: "https://github.com/lawalker4/workday-schedule",
      githublink: "https://github.com/lawalker4/workday-schedule",
    },
    {

      name: "The Weather Dashboard",
      image_path: weatherdashboard,
      project: category,
      description:
        "Server-Side APIs Challenge: Weather Dashboard",
      link: "https://github.com/lawalker4/weather-dashboard",
      githublink: "https://github.com/lawalker4/weather-dashboard",
    },

  ]);

  const currentProjects = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i});
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProjects={currentProjects} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          //make image a link
          <img
          alt={image.name}
          className="img-thumbnail mx-1"
          src={image.image_path}
          
          onClick={() => toggleModal(image, i)}
          key={image.name}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;