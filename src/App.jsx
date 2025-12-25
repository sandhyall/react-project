import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout/Layouts';
import Inc from './Component/Inc';
import Form from './Component/Common/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Inc />} />
        <Route path ="/Form" element={<Form/>}/>
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
