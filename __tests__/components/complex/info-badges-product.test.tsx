/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ApiGetMostSelledImp from '@/api-clients/use-case-api/api-get-most-selled';
import MostSelled from '@/components/complex/most-selled';
import { InfoBadgesProduct } from '@/components/complex/info-badges-product';


describe('Home', () => {
  it('component:info-badges-product.test.tsx', () => {

    render(<InfoBadgesProduct />);


    expect(screen.getByText('InfoBadgesProduct')).toBeInTheDocument();

  })
})