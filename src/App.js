import './App.css';
import React from 'react'
import Navbar from './Navbar'
import AboutMe from './view/AboutMe'
import Cv from './view/Cv'
import { Routes, Route} from 'react-router-dom'
import Home from './view/Home';
import Contact from './view/Contact';
import Rating from './view/Rating';

function App() {
  return (
    <>
   <Navbar />

   <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

   <Routes>
      <Route path='/aboutme' element={<AboutMe/>}/>
    </Routes>
    <Routes>
      <Route path='/cv' element={<Cv/>}/>
    </Routes>
    <Routes>
      <Route path='/rating' element={<Rating/>}/>
    </Routes>
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
    
      
  );
}

export default App;
