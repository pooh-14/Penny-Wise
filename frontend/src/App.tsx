import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import Expenses from './Components/Expenses';
import Accounts from './Components/Accounts';
import MyProfile from './Components/MyProfile';
import Transactions from './Components/Transactions';

function App() {
  return (     
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/expense' element={<Expenses/>}/>
        <Route path='/account' element={<Accounts/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/transaction' element={<Transactions/>}/>
      </Routes>
    </div>
  );
}

export default App;
