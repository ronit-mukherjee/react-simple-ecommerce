import React from 'react';
import { render} from '@testing-library/react';
import Component from './ProductsList.component';

const products = [
  {
    id: 1001,
    name: "Product Name",
    price: 100.5
  },
  {
    id: 1002,
    name: "Product Name 2",
    price: 105.5
  },
  {
    id: 1003,
    name: "Product Name 3",
    price: 115.5
  }
]

test('Renders ProductsList', () => {
  const { getAllByText } = render(<Component products={products} addToCart={()=>{}} type="display" />);
  const productElements = getAllByText(/Name:/i);
  expect(productElements.length).toEqual(products.length);
});
