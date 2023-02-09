/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPanel from '@/components/complex/search-parts/search-panel';


describe('Home', () => {
  it('component:footer', () => {

    render(<SearchPanel />);


    expect(screen.getByTestId('SearchPanel')).toBeInTheDocument();

  })
})