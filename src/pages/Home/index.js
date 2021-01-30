import React from 'react';
import '../main.css'
import me from './myphoto.jpg'
import './style.css'
import { MySkill } from '../../components'
import html from './logos/html.png';
import css from './logos/css.png';
import js from './logos/javascript.png';
import reactJs from './logos/reactjs.png';
import docker from './logos/docker.png';
import django from './logos/django.png';
import figma from './logos/figma.png';
import flask from './logos/flask.png';
import node from './logos/nodejs.png';
import netlify from './logos/netlifyIcon.png';
import sass from './logos/sass.png';
import redux from './logos/redux.png';
import java from './logos/java.png';
import jest from './logos/jestIcon.png';
import python from './logos/python.png';
import postgres from './logos/postgresql.png';
import mongodb from './logos/mongodb.png';

const Home = () => {
    const skillArray = [
        {skill: "html",logo: html},
        {skill: "css",logo: css},
        {skill: "js",logo: js},
        {skill: "reactJs",logo: reactJs},
        {skill: "docker",logo: docker},
        {skill: "django",logo: django},
        {skill: "figma",logo: figma},
        {skill: "flask",logo: flask},
        {skill: "node",logo: node},
        {skill: "netlify",logo: netlify},
        {skill: "sass",logo: sass},
        {skill: "redux",logo: redux},
        {skill: "java",logo: java},
        {skill: "jest",logo: jest},
        {skill: "python",logo: python},
        {skill: "postgres",logo: postgres},
        {skill: "mongodb",logo: mongodb},
    ];

    return(
        <section>
            <div className="typewrite">
                <h1>Hi my name is Raj</h1>
            </div>
            <img className="myimg" src={me} alt="Raj tandel photo"/>
            <h3>A little about me:</h3>
            <p>I am a Computer Science graduate from Middlesex university.
                I am looking for new opportunities to develop my career as a junior software engineer.
                I have always enjoyed problem solving and finding efficient solutions to problems.
            </p>
            <h3>My Skills:</h3>
            <div className="skills">
                {skillArray.map((s, i) => <MySkill key={i} skill={s}/>)}
            </div>
        </section>
    )
}

export default Home;