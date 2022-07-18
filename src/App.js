import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { TopNav } from './components';
import { Cart, Store, AddProduct, EditProduct, Product } from './pages';

function App() {
  const state = useSelector(state => state);

  console.log(state);

  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path='/' element={<Store />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path='/editproduct' element={<EditProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
