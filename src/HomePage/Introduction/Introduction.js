import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import './Introduction.css';

import resumeIcon from '../../assets/document.png';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github-white.png';
import profilePic from '../../assets/profile.jpeg';
import resume from '../../assets/Resume2024.pdf';
const Introduction = () => {
    const [text, setText] = useState('HELLO!');
    const texts = ['HELLO!', 'HOLA!', 'BONJOUR!', 'HALLO!', 'HELLO!'];
    let textIndex = 0;
  
    const containerRef = useRef(null);
 

    useEffect(() => {
        const interval = setInterval(() => {
            textIndex++;
            if (textIndex < texts.length) {
                setText(texts[textIndex]);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const adjustFontSize = () => {
        const container = containerRef.current;
       

        if (container) {
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            const newFontSize = Math.min(containerWidth, containerHeight) * 0.17;
            container.style.setProperty('--font-size', `${newFontSize}px`);
        }

    };

    useEffect(() => {
        adjustFontSize();
        window.addEventListener('resize', adjustFontSize);
        return () => {
            window.removeEventListener('resize', adjustFontSize);
        };
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="column col-1">
                    <div className='image-container-name' ref={containerRef}>
                        <h1 className='name' id='name'>Megan</h1>
                        <div className='image-container'>
                            <img src={profilePic} alt="profile" className="profile-image" />
                        </div>
                    
                    <div className="text-description">
                        <p>Student, Teacher, and Leader</p>
                        <p>Full Stack Software Development</p>
                    </div>
                    </div>
                </div>
                <div className="column col-2">
                    <div className='column-2-container'>
                        <h1>{text}</h1>
                        <div className='text-container' >
                            <p>Hi! My name is Megan and I am a Masters student in Computer Science at the University of Edinburgh. In my dissertation, I am exploring methods of applying LLMs within the educational field. I have a passion for education and I regularly tutor students in mathematics and coding.</p>
                            <p>I am also an avid language learner and speak French, Spanish and a bit of German with a 4<sup> +</sup> year Duolingo Streak.</p>
                            <p>This page is a work in progress that will be regularly updated</p>
                        </div>
                        <div className='button-container'>
                            <a href="https://www.linkedin.com/in/megan-morris-7aa4711a3/" className="contact-icon-container">
                                <img src={linkedinIcon} alt="linkedin icon" className="contact-icon" />
                            </a>
                            <a href="https://github.com/megan17morris" className="contact-icon-container">
                                <img src={githubIcon} alt="github icon" className="contact-icon github-icon" id='git-icon'/>
                            </a>
                            <a href={resume} className="contact-icon-container">
                                <img src={resumeIcon} alt="resume icon" className="contact-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
