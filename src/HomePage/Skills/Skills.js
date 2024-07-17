import React from 'react';
import { useEffect, useState } from 'react';
import '../../App.css';
import './Skills.css';
import skillsData from './skillsData';
import Carousel from './carousel';

const Skills = () => {
  // Function to distribute items into rows
  const [screenType, setScreenType] = useState('cpu');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScreenType('phone');
      } else {
        setScreenType('cpu');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  function distributeItems(totalItems) {
    const numRows = Math.max(2, Math.ceil(totalItems / 5));
    const rowRanges = [];
    const baseItemsPerRow = Math.floor(totalItems / numRows);
    const remainder = totalItems % numRows;

    let startRange = 0;
    for (let i = 0; i < numRows; i++) {
      let endRange = startRange + baseItemsPerRow - 1;
      if (i < remainder) {
        endRange += 1;
      }
      rowRanges.push({ start: startRange, end: endRange });
      startRange = endRange + 1;
    }

    return rowRanges;
  }

  // Function to split skill name into multiple lines if it contains two words
  function formatSkillName(name) {
    const words = name.split(' ');
    if (words.length === 2) {
      return (
        <div className='skill-name'>
          <div>{words[0]}</div>
          <div>{words[1]}</div>
        </div>
      );
    }
    return <div className='skill-name'>
       <div>{name}</div> 
       <br></br>
        </div>;
  }

  function generateItemsFromCategory(category, screenType) {
    const columns = [];

    for (let i = 0; i < category.list.length; i += screenType === 'phone' ? 1 : 2) {
      const skill1 = category.list[i];
      const skill2 = i + 1 < category.list.length && screenType !== 'phone' ? category.list[i + 1] : null;

      const column = (
        <div className='skill-column' key={i}>
          {skill1 && (
            <div className='skill-container'>
              <div className='skill'>
                <img src={skill1.icon} alt={skill1.name} className='skill-icon' />
              </div>
              {formatSkillName(skill1.name)}
            </div>
          )}
          {skill2 && (
            <div className='skill-container'>
              <div className='skill'>
                <img src={skill2.icon} alt={skill2.name} className='skill-icon' />
              </div>
              {formatSkillName(skill2.name)}
            </div>
          )}
        </div>
      );
      columns.push(column);
    }

    return columns;
  }

  return (
    <div className='container'>
      <div className='hp-section skills'>
        <div className='carousel-test'>
          {skillsData.map((skillCategory, index) => (
            <div className='carousel-container' key={index}>
              <h2 className='skill-box-title' key={index}>{skillCategory.type}</h2>
              <Carousel items={generateItemsFromCategory(skillCategory)} />
            </div>
          ))}
        </div>
        <hr />
        <div className='row section-row'>
          <div className='column section-col-1'>
            <h1 className='section-title'>Skills</h1>
          </div>
          <div className='column section-col-2'>
            <div className='skill-box-section'>
              {skillsData.map((skillCategory, index) => (
                <div className='skill-box-with-title' key={index}>
                  <h2 className='skill-box-title'>{skillCategory.type}</h2>
                  <div className='skill-box'>
                    {distributeItems(skillCategory.list.length).map((range, rowIndex) => (
                      <div className={`row row-fixed r${rowIndex + 1}`} key={rowIndex}>
                        {skillCategory.list.slice(range.start, range.end + 1).map((skill, skillIndex) => (
                          <div className='skill-column' key={`${rowIndex}-${skillIndex}`}>
                            <div className='skill-container'>
                              <div className='skill'>
                                <img src={skill.icon} alt={skill.name} className='skill-icon' />
                              </div>
                              {formatSkillName(skill.name)}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
