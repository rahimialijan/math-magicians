import React from 'react';
import Navpage from './navigation/navpage';
import Navbar from './navigation/navbar';

const Mainpage = () => (
  <>
    <div className="navbar">
      <Navbar />
    </div>
    <div className="mainpage">
      <Navpage />
    </div>
  </>
);

export default Mainpage;
