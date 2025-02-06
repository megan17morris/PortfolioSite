
import '../../App.css';
import './LatestProjects.css';
//import rightArrow from '../../assets/right-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import '../../Projects/projectData';
import profile from '../../assets/profile.jpeg';
import projectData from '../../Projects/projectData';
import SkillBox from '../../Skills/skillBox';



const LatestProjects = () => {

   
    return (
        <div className="container latest-projects-container">
            <div className='row'>
                <div className='column col-1 title-column'>
                    <div className ='title-container'>
                        <div className='section-title'>Latest Projects</div>
                        <div className='consistent-row view-portfolio-row'>
                           
                                <a className='portfolio-link' href="/Projects">View Portfolio</a>
                         
                            
                                <div className='arrow-container'>
                                        <RightArrow className='right-arrow' />
                                    </div>
                         
                        </div>
                        <div className='line'></div>

                    </div>
                </div>
                <div className='column col-2 project-column'>
                    {projectData.map((project, index) => (
                        <div className='consistent-row project-container'>
                        <div className='column col-1 image-col'>
                            <div className='project-image-container'>
                                <img src={profile} alt={project.alt} className='project-image' />
                            </div>
                            </div>
                            <div className='column col-2 project-info-col'>
                                
                            <h2 className='project-name'>{project.title}</h2>
                            <div className ="project-description">{project.textPreview}</div>
                            <div className="built-with-container row">
                                <div className = "built-with col-1">Built With:</div>
                                <div className = "tech-list-row consistent-row col-2">
                                {project.skillsUsed.map((skill) => (
                                    <SkillBox key={skill} skillName={skill} />
                                    ))}

                                 
                                   
                                  
                       
                                </div>
                            </div>

                            
                            </div>
                        </div>
                    ))}
                    
                    </div>
                    </div>
                                
                
           </div>
     


    )

}

export default LatestProjects;