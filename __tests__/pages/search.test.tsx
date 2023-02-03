/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from '@/pages/Search';


describe('Home', () => {
  it('pages:Search', () => {

     render(<Search />);


    expect(screen.getByText('Search')).toBeInTheDocument();
 
  })
})