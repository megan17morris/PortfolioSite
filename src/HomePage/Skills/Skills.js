import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import './Skills.css';
import linkedinIcon from '../../assets/linkedin.svg';
import profilePic from '../../assets/profile.jpeg';




const Skills = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="column col-1">
                    <div className='image-container-name'>
                        <h1 className='name' id='name'>Megan</h1>
                        <div className='image-container'>
                            <img src={profilePic} alt="profile" className="profile-image" />
                        </div>
                    </div>
                    <div className="text-description">
                        <h2 className='description'>I am a full stack developer with a passion for front-end development. I am a recent graduate from the University of Washington's Full Stack Coding Bootcamp. I am a quick learner and a hard worker. I am excited to start my career in the tech industry.</h2>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/megan-karnes-7a9b1b1b5/" target="_blank" rel="noreferrer">
                                <img src={linkedinIcon} alt="linkedin" className="icon" />
                            </a>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
    )

    }

    export default Skills;