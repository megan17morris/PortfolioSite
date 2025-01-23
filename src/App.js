import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './HomePage/Home';
import Projects from './Projects/Projects';


function App() {
  return (
    <Router>
      
      <div className='app-container'>
        <NavBar />
        <div className='body-container'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
