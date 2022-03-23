import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Covid from './features/Covid/Covid';
import CurrencyExchange from './features/CurrencyExchange/CurrencyExchange';
import DevTeam from './features/DevTeam/DevTeam';
import Homepage from './features/Homepage/Homepage';
import Navbar from './features/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <div className='header'><Navbar /></div>
      <div className='main'>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/DevTeam' element={<DevTeam />} />
          <Route exact path='/COVID' element={<Covid />} />
          <Route exact path='/CurrencyExchange' element={<CurrencyExchange />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
