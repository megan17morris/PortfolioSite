import './skillBox.css';
import React from 'react';
import skillsData1 from './skillsData1';

const SkillBox = ({ skillName }) => {
  const skill = skillsData1.find((skill) => skill.name === skillName);


  function formatSkillName(skill) {
    const words = skill.split(' ');
    if (words.length === 2) {
      return (
        <div className='skill-name'>
          <div>{words[0]}</div>
          <div>{words[1]}</div>
        </div>
      );
    }
    return <div className='skill-name'>
       <div>{skill}</div> 
       <br></br>
        </div>;
  }
  if (!skill) {
    return <div className="skill-name">{skillName}</div>;  // Fallback if skill not found
  }

  return (
    <div className='skill-container'>
        <div className='skill'>
            <img src={skill.icon} alt={skill.name} className='skill-icon' />
        </div>
        {formatSkillName(skill.name)}
    </div>
  );
};

export default SkillBox;
