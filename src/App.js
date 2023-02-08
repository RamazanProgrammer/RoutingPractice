import React from 'react';
import Nav from './components/Nav';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
    <Nav /> 

    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/Login' element={<Login/>} />

    </Routes>   
    </div>
  );
}

export default App;
