import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Mainpage from './MainPage';

function App() {
  return (
    <div className="container">
      <BrowserRouter><Mainpage /></BrowserRouter>
    </div>
  );
}

export default App;
