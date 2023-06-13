import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from '../components/Calculator/Calculator';
import Homepage from '../components/Home/HomePage';
import Quotes from '../components/quote/quotes';

const Navpage = () => (
  <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default Navpage;
