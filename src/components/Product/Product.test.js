import React from 'react';
import { render} from '@testing-library/react';
import Component from './Product.component';
  const product = {
    id: 1001,
    name: "Product Name",
    price: 100.5
  }

test('Renders Product', () => {
  const { getByText } = render(<Component details={product} />);
  const productElement = getByText(product.name);
  expect(productElement).toBeInTheDocument();
});
