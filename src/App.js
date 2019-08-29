import React from 'react';
import './App.css';

import Card from './components/Card'

function App() {
  return (
    <div className="app">
      <div className='container'>
        <div className='row mt'>
 
        <Card>Emmanuel Alvarez</Card>
        <Card>Diego Barreto</Card>
        <Card>Mauricio</Card>
        </div>
      </div>
    </div>
  );
}

export default App;
