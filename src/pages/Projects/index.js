import React from 'react';
import { ProjectCard } from '../../components';
import '../main.css';
import './style.css';

import ihabit from './img/ihabit.png';
import magic from './img/magic.png';
import pianotes from './img/pianotes.png';
import pokedex from './img/pokedex.png';
import postits from './img/postits.png';
import triviaplanet from './img/triviaplanet.png';


class Projects extends React.Component{
    projectData = [
        {
            name: "PostIt's",
            description: "This was the first team project at futureproof. It's a anonymous blog posting site for users to share their thoughts on. \
            The data is stored on the server so older posts can still be viewed.",
            image: postits,
            link: "https://postits.netlify.app/"
        },
        {
            name: "Trivia Planet",
            description: "This was the second team project at futureproof. It's a local multiplayer quiz game with up to four players. \
            The website allows the user to select everything from question topics to their difficulty.",
            image: triviaplanet,
            link: "https://trivia-planet.netlify.app/"
        },
        {
            name: "IHabits",
            description: "This is a website to help users track their daily habits. The website retrieves the users data from the server \
            after they login to the site. Once a habit is created the website will automatically create a new instance of that habit everyday.",
            image: ihabit,
            link: "https://github.com/rajtandel21/iHabit-project"
        },
        {
            name: "Pokedex",
            description: "This was my first react app that\
             calls the pokeapi and gets data on 20\
              pokemon at a time, you can also search for specific pokemons. \
              The images are also obtained from another source as they are better quality.",
            image: pokedex,
            link: "https://hopeful-joliot-33061f.netlify.app/"
        },
        {
            name: "Magic Trick",
            description: "A fun project that allows the users to shuffle the cards, hide then and preform magic at the click of a button.\
            The randomized cards will be sorted by suit and number. The cards are not replaced or removed from the array when sorted.",
            image: magic,
            link: "https://affectionate-wozniak-21aed0.netlify.app/"
        },
        {
            name: "PiaNotes",
            description: "Does this website let me Play the piano? Yes... it does, by pressing the keyboard keys between Z and M the corresponding piano \
            not will be played along with the key press animation.",
            image: pianotes,
            link: "https://inspiring-pare-ae507d.netlify.app/"
        }
    ]
    render() {
        const allProjects = this.projectData.map((p, i) => {
            return <ProjectCard key={i} name={p.name} description={p.description} image={p.image} link={p.link}/>
        })
        return (
             <section>
                 <h1>My Projects</h1>
                 <p>Here are a few of the projects that I have worked on.
                     To view all of my other projects please visit by <a href="https://github.com/rajtandel21">GitHub</a>.
                 </p>
                 <div className="projectContainer">
                    {allProjects}
                 </div>
             </section>
        );
    }
};

export default Projects;