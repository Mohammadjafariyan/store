/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginInsertEmailPhone from '@/components/complex/auth-utils/login-insert-email-phone';


describe('Home', () => {
  it('component:login', () => {

    render(<LoginInsertEmailPhone />);


    expect(screen.getByTestId('LoginInsertEmailPhone')).toBeInTheDocument();

  })
})