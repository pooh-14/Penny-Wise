import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Pages/Dashboard/HomePage';
import Expenses from './Pages/Expenses/Expenses';
import Accounts from './Pages/Accounts/Accounts';
import MyProfile from './Pages/MyProfile/MyProfile';
import Transactions from './Pages/Transactions/Transactions';
import IncomeSavings from './Pages/IncomeSavings/IncomeSavings';
import AddExpense from './Components/AddExpense';
import Register from './Pages/Forms/Register';
import Login from './Pages/Forms/Login';
import EditExpense from './Components/EditExpense';
function App() {
  return (     
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/expense' element={<Expenses/>}/>
        <Route path='/expense/:id' element={<Expenses/>}/>
        <Route path='/account' element={<Accounts/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/transaction' element={<Transactions/>}/>
        <Route path='/income' element={<IncomeSavings/>}/>
        {/* <Route path='/add' element={<AddExpense/>}/> */}
        <Route path='/edit/:id' element={<EditExpense/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
