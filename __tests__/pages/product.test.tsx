/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from '@/pages/Search';
import ProductPage from '@/pages/productPage';


describe('Home', () => {
  it('pages:Product', () => {

     render(<ProductPage />);


    expect(screen.getByText('Product')).toBeInTheDocument();
 
  })
})