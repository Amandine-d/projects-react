import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Products from './containers/Products';
import Favorites from './containers/Favorites';

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
