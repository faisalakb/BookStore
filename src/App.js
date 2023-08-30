import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './component/Categories';
import Store from './redux/store';
import BookDisplay from './component/BookDisplay';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookDisplay />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
