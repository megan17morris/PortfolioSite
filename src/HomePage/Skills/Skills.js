import React from 'react';
import '../../App.css';
import './Skills.css';
import skillsData from './skillsData';

const Skills = () => {
    // Function to distribute items into rows
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
        return <div className='skill-name'>{name}</div>;
    }

    return (
        <div className="container">
            <div className='hp-section skills'>
                <hr />
                <div className='row section-row'>
                    <div className='column section-col-1'>
                        <h1 className='section-title'>Skills</h1>
                    </div>
                    <div className='column section-col-2'>
                        <div className='skill-box-section'>
                            {skillsData.map((skillCategory, index) => (
                                <div className="skill-box-with-title" key={index}>
                                    <h2 className="skill-box-title">{skillCategory.type}</h2>
                                    <div className="skill-box">
                                        {distributeItems(skillCategory.list.length).map((range, rowIndex) => (
                                            <div className={`row row-fixed r${rowIndex + 1}`} key={rowIndex}>
                                                {skillCategory.list.slice(range.start, range.end + 1).map((skill, skillIndex) => (
                                                    <div className="skill-column" key={`${rowIndex}-${skillIndex}`}>
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
}

export default Skills;
