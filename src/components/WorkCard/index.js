import React from 'react';
import './style.css';

const WorkCard = ({company, role, description, lessons}) => {
    return(
        <div className="work">
            <h2>{company}</h2>
            <p>{role}</p>
            <p>{description}</p>
            <p>{lessons}</p>
        </div>
    );
};

export default WorkCard;