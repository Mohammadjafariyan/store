/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';
import SearchResult from '@/components/complex/search-parts/search-result';


describe('Home', () => {
  it('component:footer', () => {

    render(<SearchResult />);


    expect(screen.getByTestId('SearchResult')).toBeInTheDocument();

  })
})