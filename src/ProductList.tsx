import React from 'react';

// Define the type for the props
interface Product {
  name: string;
  category: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <span>{product.name}</span> - <span>{product.category}</span> - $
          <span>{product.price}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
