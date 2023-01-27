/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FooterLinks } from '@/components/complex/footer';


describe('Home', () => {
  it('component:footer', () => {

    render(<FooterLinks />);


    expect(screen.getByText('© 2023 تمامی حقوق محفوظ است.')).toBeInTheDocument();

  })
})