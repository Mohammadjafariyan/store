/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginRegisterModal from '@/components/complex/auth-utils/login-register-modal';


describe('Home', () => {
  it('component:login-register-modal', () => {

    render(<LoginRegisterModal />);


    expect(screen.getByTestId('login-register-modal')).toBeInTheDocument();

  })
})