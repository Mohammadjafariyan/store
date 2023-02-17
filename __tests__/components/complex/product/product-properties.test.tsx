/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';
import SearchResult from '@/components/complex/search-parts/search-result';
import SearchFilterPanel from '@/components/complex/search-parts/search-filter-panel';
import ProductLinkParts from '@/components/complex/product/product-link-parts';
import ProductSingle from '@/components/complex/product/product-single';
import ProductProperties from '@/components/complex/product/product-properties';


describe('Home', () => {
  it('component:ProductProperties', () => {

    render(<ProductProperties />);


    expect(screen.getByTestId('ProductProperties')).toBeInTheDocument();

  })
})

