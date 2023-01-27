/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ApiGetMostSelledImp from '@/api-clients/use-case-api/api-get-most-selled';
import MostViewed from '@/components/complex/most-viewed';


describe('Home', () => {
  it('component:most viewed', () => {

    render(<MostViewed />);


    expect(screen.getByText('محصولات با بیشترین بازدید')).toBeInTheDocument();

  })
})