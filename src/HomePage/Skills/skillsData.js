import linkedin from '../../assets/linkedin.svg';
import activeListening from './skillsIcons/activeListening.png';
import communication from './skillsIcons/communication.png';
import leadership from './skillsIcons/leadership.png';
import tensorFlow from './skillsIcons/tensorflow.svg';
import keras from './skillsIcons/keras.svg';
import scikitLearn from './skillsIcons/scikit-learn.svg';
import pyTorch from './skillsIcons/pytorch.svg';
import openAI from './skillsIcons/openai.svg';
import html from './skillsIcons/html5.png';
import teamManagement from './skillsIcons/teamManagement.png';
import bootstrap from './skillsIcons/bootstrap.png';
import cIcon from './skillsIcons/c++.png';
import jquery from './skillsIcons/jQuery.png';
import react from './skillsIcons/react.png';
import fireBase from './skillsIcons/fireBase.png';
import problem_solving from './skillsIcons/problem-solving.png';
import project_management from './skillsIcons/project-management.png';
import pythonIcon from './skillsIcons/python.png';
import tensorFlowIcon from './skillsIcons/tensorflow.svg';
import pytorch from './skillsIcons/pytorch.svg';
import teamBuilding from './skillsIcons/teamBuilding.png';
import sql from './skillsIcons/sql-server.png';
import java from './skillsIcons/java.png';
import openai from './skillsIcons/openai.svg';
import mongoDB from './skillsIcons/mongoDB.png';
import scikitLearnIcon from './skillsIcons/scikit-learn.svg';

import javasScript from './skillsIcons/js.png';
import css from './skillsIcons/cssFile.png';


const skillsData = [
    { 
        type: 'Front End', 
        list: [
            { name: 'HTML', icon: html },
            { name: 'CSS', icon: css },
            { name: 'JavaScript', icon: javasScript },
            { name: 'React', icon: react },
            { name: 'Bootstrap', icon: bootstrap },
            { name: 'jQuery', icon: jquery }
        ]
    },
    { 
        type: 'Back End', 
        list: [
            { name: 'Node.js', icon: linkedin },
       
            { name: 'MongoDB', icon: mongoDB },
            { name: 'SQL', icon: sql },
            { name: 'Python', icon: pythonIcon },
            { name: 'Java', icon: java },
            { name: 'C++', icon: cIcon },
            { name: 'Firebase', icon: fireBase },
            
        ]
    
    },
    { 
        type: 'Machine Learning and AI', 
        list: [
        
            { name: 'OpenAI API', icon: openAI },
            { name: 'PyTorch', icon: pyTorch },
            { name: 'Keras', icon: keras },
            { name: 'Scikit Learn', icon: scikitLearn },
            { name: 'TensorFlow', icon: tensorFlow },
      
           
        ]
    },
    { 
        type: 'Soft Skills', 
        list: [
            { name: 'Project Management', icon: project_management },
            { name: 'Presentation', icon: linkedin },
            { name: 'Leadership', icon: leadership },
            { name: 'Problem Solving', icon: problem_solving },
            { name: 'Active Listening', icon: activeListening },
            { name: 'Communication', icon: communication },
            { name: 'Team Building', icon: teamBuilding },
            { name: 'Team Management', icon: teamManagement },
        ]
    
    }
];

export default skillsData;