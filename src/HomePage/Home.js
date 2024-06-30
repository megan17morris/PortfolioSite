import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './Home.css';


import Introduction from './Introduction/Introduction';
import Skills from './Skills/Skills';

const Home = () => {
 

  return (
    <div>
    < Introduction />
 
    {<Skills />}
    </div>
   

  )
    
};

export default Home;
