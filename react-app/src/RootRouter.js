import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CarerList from './CarerList';
import Carer from './Carer';

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/carers" exact element={<CarerList />} />
        <Route path="/carers/:carerId" element={<Carer />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
