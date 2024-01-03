import React from 'react';
import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Home from '../Home/Home';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Certificate from '../Certificate/Certificate';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';
import Education from '../Education/Education';


function App() {
  return (
    <div>
      <HashRouter>
        <NavBar/>
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Project/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/certificates' element={<Certificate/>}/>
                <Route path='/education' element={<Education/>}/>
           </Routes>
          <GoHome/>
          </HashRouter>
    </div>
  );
};

export default App;
