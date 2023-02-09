/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';
import SearchResult from '@/components/complex/search-parts/search-result';
import SearchFilterPanel from '@/components/complex/search-parts/search-filter-panel';
import ProductLinkParts from '@/components/complex/product/product-link-parts';


describe('Home', () => {
  it('component:product-link-parts', () => {

    render(<ProductLinkParts />);


    expect(screen.getByTestId('product-link-parts')).toBeInTheDocument();

  })
})