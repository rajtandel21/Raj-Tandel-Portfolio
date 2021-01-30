import React from 'react';
import './style.css';

const MySkill = ({skill}) => {
    return(
        <div className="skillBox">
            <img className="skillLogo" src={skill.logo}/>
            <h4>{skill.skill}</h4>
        </div>
    )
};

export default MySkill;