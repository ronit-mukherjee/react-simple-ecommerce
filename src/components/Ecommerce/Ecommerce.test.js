import React from 'react';
import { render } from '@testing-library/react';
import Component from './Ecommerce.component';

test('renders learn react link', () => {
  const { getByText } = render(<Component name="RMart" />);
  const headingElement = getByText(/RMart/i);
  expect(headingElement).toBeInTheDocument();
});
