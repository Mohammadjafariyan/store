/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';
import SearchResultItem from '@/components/complex/search-parts/search-result-item';


describe('Home', () => {
  it('component:search-result-item', () => {

    render(<SearchResultItem />);


    expect(screen.getByTestId('search-result-item')).toBeInTheDocument();

  })
})