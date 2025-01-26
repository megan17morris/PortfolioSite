import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './Home.css';


import Introduction from './Introduction/Introduction';

import Experiences from './Experiences/Experiences';
import LatestProjects from './LatestProjects/LatestProjects';

const Home = () => {
 

  return (
    <div>
    < Introduction />
    < Experiences />
    <LatestProjects />

    
    </div>
   

  )
    
};

export default Home;
