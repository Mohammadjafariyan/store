/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ApiGetMostSelledImp from '@/api-clients/use-case-api/api-get-most-selled';
import MostSelled from '@/components/complex/most-selled';


describe('Home', () => {
  it('component:most Selled', () => {

    render(<MostSelled />);


    expect(screen.getByText('پر فروش ترین ها')).toBeInTheDocument();

  })
})