import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import github from './githubImg.png';
import linkedin from './linkedinImg.png'
import home from './home.png';
import projects from './projects.png';
import work from './work.png';


const NavBar = () => {
    return(
        <nav className="navBar">
            <div className="navOptions">
                <NavLink className="icon" exact to="/" activeClassName="current">
                    <img className="myicon" src={home} alt="Home"/>
                    </NavLink>
                <NavLink className="icon" to="/Projects" activeClassName="current">
                    <img className="myicon" src={projects} alt="Projects"/>
                    </NavLink>
                <NavLink className="icon" to="/Work" activeClassName="current">
                    <img className="myicon" src={work} alt="Work"/>
                </NavLink>
                <a className="icon" href={"https://github.com/rajtandel21"}>
                    <img className="myicon" src={github} alt="GitHub link"/>
                </a>
                <a className="icon" href={"https://uk.linkedin.com/in/raj-tandel-100b76146"}>
                    <img className="myicon" src={linkedin} alt="LinkedIn link"/>
                </a>
            </div>
        </nav>
    )
}

export default NavBar;