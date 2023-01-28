/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Register from '@/components/complex/auth-utils/register';


describe('Home', () => {
  it('component:register', () => {

    render(<Register />);


    expect(screen.getByTestId('register')).toBeInTheDocument();

  })
})