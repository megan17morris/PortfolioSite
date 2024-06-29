// src/Home.js
import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import resumeIcon from '../assets/document.png';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github-white.png';


const Home = () => {
  const [text, setText] = useState('HELLO!');
  const texts = ['HELLO!', 'HOLA!', 'BONJOUR!', 'HALLO!', 'HELLO!'];
  let textIndex = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      textIndex++;
      if (textIndex < texts.length) {
        setText(texts[textIndex]);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
return (
    <div className="container">
        <div className="row">
            <div className="column">
                <h2>Column 1</h2>
                <p>This is the content for column 1.</p>
            </div>
            <div className="column">
                <div className='column-2-container'>
                <h1>{text}</h1>
                <div className='text-container'>
                <p>Hi! My name is Megan and I am a
                     Masters student in Computer Science
                      at the University of Edinburgh. 
                      In my dissertation, I am exploring 
                      methods of applying LLMs within the educational field. I have a passion for education and I regularly 
                      tutor students in mathematics and coding. </p>

                      <p> I am also an avid 
                      language learner and speak French, Spanish and a bit of German with a 4+ year Duolingo Streak. </p>
                </div>
                <div className='button-container'>
                    <a href="/" className="contact-icon-container">
                    <img src={linkedinIcon} alt="linkedin icon" className="contact-icon" />
                    </a>
                    <a href="/" className="contact-icon-container">
                    <img src={githubIcon} alt="github icon" className="contact-icon linkedin-icon" />
                    </a>
                 
                    <a href="/" className="contact-icon-container">
                    <img src={resumeIcon} alt="resume icon" className="contact-icon" />
                    </a>

                </div>
                </div>
                
            </div>
        </div>
    </div>
);
}

export default Home;
