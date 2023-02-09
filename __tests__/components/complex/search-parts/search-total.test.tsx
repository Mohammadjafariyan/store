/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';
import SearchTotal from '@/components/complex/search-parts/search-total';


describe('Home', () => {
  it('component:footer', () => {

    render(<SearchTotal />);


    expect(screen.getByTestId('SearchTotal')).toBeInTheDocument();

  })
})