/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';
import SearchResult from '@/components/complex/search-parts/search-result';
import SearchFilterPanel from '@/components/complex/search-parts/search-filter-panel';


describe('Home', () => {
  it('component:footer', () => {

    render(<SearchFilterPanel />);


    expect(screen.getByTestId('SearchFilterPanel')).toBeInTheDocument();

  })
})