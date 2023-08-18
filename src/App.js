import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './component/Books';
import Categories from './component/Categories';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
