import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Navbar from './components/structural/Navbar/Navbar';
import Home from './pages/Home';


function App() {
  return (
      <div className="App">
        <Navbar />
        <Route path='/' component={Home} />
      </div>
  );
}

export default App;
