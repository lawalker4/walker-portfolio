import React, { useState } from "react";
import Modal  from "../Modal";


import recipepantry from '../../assets/images/recipepantry.JPG'
import brews from '../../assets/images/brews.JPG'
import notetaker from '../../assets/images/notetaker.JPG'
import bistro from '../../assets/images/bistro.JPG'
import workday from '../../assets/images/workday.JPG'
import weatherdashboard from '../../assets/images/weatherdashboard.JPG'
import password from '../../assets/images/password.JPG'

const Projects = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ setCurrentProject] = useState();
 
  const [photos] = useState([
    {
      name: "Bistro Box",
      image_path: bistro,
      project: category,
      description:
        "This application allows the user to select and create their own meal kit box. This application uses REACT, MongoDB, and Javascript to name a few packages.",
      link: "https://bistro-box.herokuapp.com/",
      githublink: "https://github.com/charliebear2000/BistroBox",
    },
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
    {

      name: "Password Generator",
      image_path: password,
      project: category,
      description:
        "I created a password generator using JavaScript. I created a password that is 8-128 characters long. Giving the client the ability to pick between symbols, numbers and case choice. ",
      link: "https://github.com/lawalker4/js-passwordgenerator",
      githublink: "https://github.com/lawalker4/js-passwordgenerator",
    },

  ]);

  const currentProjects = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i});
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="port">
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProjects={currentProjects} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          //make image a link
          <a href={image.link} key={image.name}>
            <img
          alt={image.name}
          className="img-thumbnail mx-1"
          src={image.image_path}
          onClick={() => toggleModal(image, i)}
          
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Projects;