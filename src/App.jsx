
import React from 'react';
import ProductList from './components/productlist';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Fake Store Products</h1>
      <ProductList />
    </div>
  );
}

export default App;
