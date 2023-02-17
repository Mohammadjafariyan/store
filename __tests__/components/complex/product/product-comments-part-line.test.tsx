/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductAddToCart from '@/components/complex/product/product-add-to-cart';
import ProductCommentsPartLine from '@/components/complex/product/product-comments-part-line';

describe('Home', () => {
  it('component:product-comments-part-line', () => {

    render(<ProductCommentsPartLine
       />);


    expect(screen.getByTestId('ProductCommentsPartLine')).toBeInTheDocument();

  })
})