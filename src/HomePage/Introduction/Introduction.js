import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import './Introduction.css';

import resumeIcon from '../../assets/document.png';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github-white.png';
import profilePic from '../../assets/profile.jpeg';


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

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const adjustFontSize = () => {
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const newFontSize = Math.min(containerWidth, containerHeight) * 0.17; // Adjust the multiplier as needed
        container.style.setProperty('--font-size', `${newFontSize}px`);
      }
    };

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
          </div>
          <div className="text-description">
            <p>Student, Teacher, and Leader</p>
            <p>Full Stack Software Development</p>
          </div>
        </div>
        <div className="column col-2">
          <div className='column-2-container'>
            <h1>{text}</h1>
            <div className='text-container'>
              <p>Hi! My name is Megan and I am a Masters student in Computer Science at the University of Edinburgh. In my dissertation, I am exploring methods of applying LLMs within the educational field. I have a passion for education and I regularly tutor students in mathematics and coding.</p>
              <p>I am also an avid language learner and speak French, Spanish and a bit of German with a 4+ year Duolingo Streak.</p>
            </div>
            <div className='button-container'>
              <a href="/" className="contact-icon-container">
                <img src={linkedinIcon} alt="linkedin icon" className="contact-icon" />
              </a>
              <a href="/" className="contact-icon-container">
                <img src={githubIcon} alt="github icon" className="contact-icon github-icon" id='git-icon'/>
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
};

export default Introduction;