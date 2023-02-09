/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductBasicInfo from '@/components/complex/product/product-basic-info';

describe('Home', () => {
  it('component:product-basic-info', () => {

    render(<ProductBasicInfo />);


    expect(screen.getByTestId('ProductBasicInfo')).toBeInTheDocument();

  })
})