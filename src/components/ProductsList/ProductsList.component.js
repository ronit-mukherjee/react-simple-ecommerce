import React from "react";
import PropTypes from 'prop-types';

import Product from '../Product/index';

const ProductList = ({ products, type, addToCart, removeFromCart }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Product type={type} details={product} addToCart={addToCart} removeFromCart={removeFromCart} />
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes ={
    products: PropTypes.array,
    type: PropTypes.string,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func
}

export default React.memo(ProductList);
