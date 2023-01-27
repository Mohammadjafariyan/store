/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SelectOrderProductType from '@/components/complex/select-order-product-type';


describe('Home', () => {
  it('component:most viewed', () => {

    render(<SelectOrderProductType />);


    expect(screen.getByTestId('SelectOrderProductType')).toBeInTheDocument();

  })
})