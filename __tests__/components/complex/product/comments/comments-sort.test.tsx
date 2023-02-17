/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductBasicInfo from '@/components/complex/product/product-basic-info';
import CommentsAddNewComent from '@/components/complex/product/comments/comments-add-new-comment';
import CommentsSort from '@/components/complex/product/comments/comments-sort';

describe('Home', () => {
  it('CommentsSort', () => {

    render(<CommentsSort />);


    expect(screen.getByTestId('CommentsSort')).toBeInTheDocument();

  })
})