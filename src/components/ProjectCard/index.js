import React from 'react';
import { render } from 'react-dom';
import './style.css';

 class ProjectCard extends React.Component {
     state = {
         hover: false
     }

     toggleHover = () =>{
         this.setState(prevState=>({
             hover: !prevState.hover
         }))
     }
     render(){
         let style;
         if (this.state.hover){
            style = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${this.props.image})`}
        }else{
            style = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${this.props.image})`}
        }
         return(
            <a className="project" 
                href={this.props.link} 
                target="_blank"
                style={style} 
                onMouseEnter={this.toggleHover} 
                onMouseLeave={this.toggleHover}>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
            </a>
         );
     }
 }

 export default ProjectCard;