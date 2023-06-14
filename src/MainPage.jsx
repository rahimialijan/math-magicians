import React from 'react';
import Navpage from './navigation/navpage';
import Navbar from './navigation/navbar';
import Footer from './navigation/footer';

const Mainpage = () => (
  <>
    <div className="navbar">
      <Navbar />
    </div>
    <div className="mainpage">
      <Navpage />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </>
);

export default Mainpage;
