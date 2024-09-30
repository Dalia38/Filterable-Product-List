
import ProductList from './ProductList';


import React, { useState } from 'react';

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000 },
    { name: 'Shirt', category: 'Clothing', price: 50 },
    { name: 'Smartphone', category: 'Electronics', price: 700 },
    { name: 'Jacket', category: 'Clothing', price: 120 },
  ];

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div>
      <header>
        <h1>Product List</h1>
      </header>

      <div className="filter-section">
        <button className="filter-btn" onClick={() => setFilter('All')}>All</button>
        <button className="filter-btn" onClick={() => setFilter('Electronics')}>Electronics</button>
        <button className="filter-btn" onClick={() => setFilter('Clothing')}>Clothing</button>
      </div>

      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

