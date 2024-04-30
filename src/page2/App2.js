import React from 'react';
import './App2.css';
import Navbar from '../components/Navbar';
import PokeListDisplay from './PokeListDisplay';




  
  function App2 () {
    return (
      <div className='App2'>
        <Navbar></Navbar>
        <PokeListDisplay />

      </div>
    );
  }


export default App2;
