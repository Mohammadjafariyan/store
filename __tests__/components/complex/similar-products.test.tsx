/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ApiGetMostSelledImp from '@/api-clients/use-case-api/api-get-most-selled';
import MostViewed from '@/components/complex/most-viewed';
import SimilarProducts from '@/components/complex/similar-products';


describe('Home', () => {
  it('component:SimilarProducts', () => {

    render(<SimilarProducts />);


    expect(screen.getByText('SimilarProducts')).toBeInTheDocument();

  })
})