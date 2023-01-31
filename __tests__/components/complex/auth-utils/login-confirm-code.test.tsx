/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '@/components/complex/auth-utils/login';
import LoginConfirmCode from '@/components/complex/auth-utils/login-confirm-code';


describe('Home', () => {
  it('component:loginConfirmCode', () => {

    render(<LoginConfirmCode />);


    expect(screen.getByTestId('loginConfirmCode')).toBeInTheDocument();

  })
})