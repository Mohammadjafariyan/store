/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductBasicInfo from '@/components/complex/product/product-basic-info';
import CommentsAddNewComent from '@/components/complex/product/comments/comments-add-new-comment';

describe('Home', () => {
  it('CommentsAddNewComent', () => {

    render(<CommentsAddNewComent />);


    expect(screen.getByTestId('CommentsAddNewComent')).toBeInTheDocument();

  })
})