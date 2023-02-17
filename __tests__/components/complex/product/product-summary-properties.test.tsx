/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductBasicInfo from '@/components/complex/product/product-basic-info';
import ProductSummaryProperties from '@/components/complex/product/product-summary-properties';

describe('Home', () => {
  it('component:product-summary-properties', () => {

    render(<ProductSummaryProperties />);


    expect(screen.getByTestId('product-summary-properties')).toBeInTheDocument();

  })
})