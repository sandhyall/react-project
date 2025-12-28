import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout/Layouts";
import Inc from "./Component/Inc";
import Form from "./Component/Common/Form";
import Cart from "./Component/Common/Cart";
import Checkout from "./Component/Common/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inc />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
