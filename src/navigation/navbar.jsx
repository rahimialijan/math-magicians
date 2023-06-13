import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => (
  <>
    <div><h2>Math magicians</h2></div>
    <div className="nav-links">
      <NavLink to="/">
        <p>Home</p>
      </NavLink>

      <NavLink to="/calculator">
        <p>Calculator</p>
      </NavLink>

      <NavLink to="/quotes">
        <p>Quote</p>
      </NavLink>
    </div>
  </>
);

export default Navbar;
