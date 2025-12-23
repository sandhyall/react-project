import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout/Layouts';
import Inc from './Component/Inc';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inc />} />
          <Route index element={<Inc />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
