import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom'

//Components
import Navbar from './components/structural/Navbar/Navbar.jsx';
import Footer from './components/structural/Footer.jsx';
import Home from './pages/Home.jsx';


function App() {
  return (
      <div className="App">
        <Navbar />
        <Route path='/' component={Home} />
        <Footer />
      </div>
  );
}

export default App;
