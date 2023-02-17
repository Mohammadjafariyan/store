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
import ProductComments from '@/components/complex/product/product-comments';


describe('Home', () => {
  it('component:ProductComments', () => {

    render(<ProductComments />);


    expect(screen.getByTestId('ProductComments')).toBeInTheDocument();

  })
})