/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';
import SearchResult from '@/components/complex/search-parts/search-result';
import SearchFilterPanel from '@/components/complex/search-parts/search-filter-panel';
import ProductLinkParts from '@/components/complex/product/product-link-parts';
import ProductImageGallery from '@/components/complex/product/product-image-gallery';


describe('Home', () => {
  it('component:product-link-parts', () => {

    render(<ProductImageGallery />);


    expect(screen.getByTestId('ProductImageGallery')).toBeInTheDocument();

  })
})