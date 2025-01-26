
import '../../App.css';
import './LatestProjects.css';
//import rightArrow from '../../assets/right-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import profile from '../../assets/profile.jpeg';


const LatestProjects = () => {

   
    return (
        <div className="container latest-projects-container">
            <div className='row'>
                <div className='column col-1 title-column'>
                    <div className ='title-container'>
                        <div className='section-title'>Latest Projects</div>
                        <div className='row view-portfolio-row'>
                           
                                <a className='portfolio-link' href="/Projects">View Portfolio</a>
                         
                            
                                <div className='arrow-container'>
                                        <RightArrow className='right-arrow' />
                                    </div>
                         
                        </div>
                        <div className='line'></div>

                    </div>
                </div>
                <div className='column col-2 project-column'>
                    <div className='row project-container'>
                        <div className='column col-1'>
                            <div className='project-image-container'>
                                <img src={profile} alt="Project 1" className='project-image' />
                            </div>
                            </div>
                            <div className='column col-2'>
                                
                            <div className='project-info'>Probability Website</div>
                            </div>
                        </div>
                    </div>
                    </div>
                        
                    
                
           </div>
     


    )

}

export default LatestProjects;