import React from 'react';
import '../main.css';
import './style.css';
import { WorkCard } from '../../components'

class Work extends React.Component{
    workDescription = [
        {
            company: "M&C Saatchi",
            role: "IT Support Assistant | November 2018 - January 2019",
            description: "The role had responsibilites such as Preparing computers for the new employees. \
            Creating backup of account data and also restoring data for returning employees. \
            Re-imaging older computers and making sure everything is up to date such as bios and applications.",
            lessons: "I enjoyed learning more about computers in terms of hardware and bios, where as before my knowledge was \
            more along the lines of programming languages only."
        },
        {
            company: "Tesco Extra",
            role: "Customer Assistant | November 2017 - January 2018",
            description: "The role had me on rotation of shelves inventory and assisting customers with any inquires they may have. \
            I also had to check the dates of the products and remove/ replace them when adding newer items.",
            lessons: "In this role I have made improved in terms of my communication skills as it had me interacting with customers often."
        }
    ]
    render() {
        const roles = this.workDescription.map((w,i) => {
            return <WorkCard key={i} company={w.company} role={w.role} description={w.description} lessons={w.lessons}/>
        })
        return (
             <section>
                 <h1>My Work</h1>
                 <div className="workContainer">
                    {roles}
                 </div>
             </section>
        );
    }
};

export default Work;