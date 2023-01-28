/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '@/components/complex/auth-utils/login';


describe('Home', () => {
  it('component:login', () => {

    render(<Login />);


    expect(screen.getByTestId('login')).toBeInTheDocument();

  })
})