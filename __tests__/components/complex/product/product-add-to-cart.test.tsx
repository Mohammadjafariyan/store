/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductAddToCart from '@/components/complex/product/product-add-to-cart';

describe('Home', () => {
  it('component:product-add-to-cart', () => {

    render(<ProductAddToCart
       />);


    expect(screen.getByTestId('product-add-to-cart')).toBeInTheDocument();

  })
})