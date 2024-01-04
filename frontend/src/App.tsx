import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (     
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
