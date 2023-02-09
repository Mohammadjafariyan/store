/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';
import SearchSortPanel from '@/components/complex/search-parts/search-sort-panel';


describe('Home', () => {
  it('component:footer', () => {

    render(<SearchSortPanel />);


    expect(screen.getByTestId('SearchSortPanel')).toBeInTheDocument();

  })
})