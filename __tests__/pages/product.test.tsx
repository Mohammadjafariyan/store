/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from '@/pages/Search';
import Product from '@/pages/[Product]';


describe('Home', () => {
  it('pages:Product', () => {

     render(<Product />);


    expect(screen.getByText('Product')).toBeInTheDocument();
 
  })
})