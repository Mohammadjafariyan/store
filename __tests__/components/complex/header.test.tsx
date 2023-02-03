/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FooterLinks } from '@/components/complex/footer';


describe('Home', () => {
  it('component:headder', () => {

    render(<FooterLinks />);


    expect(screen.getByText('header')).toBeInTheDocument();

  })
})