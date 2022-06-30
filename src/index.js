import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductsProvider from './context/products-context';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './hooks-store/products-store';

configureProductsStore();
//This will make sure that the values are passing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
