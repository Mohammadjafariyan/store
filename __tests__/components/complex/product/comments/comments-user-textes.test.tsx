/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductBasicInfo from '@/components/complex/product/product-basic-info';
import CommentsAddNewComent from '@/components/complex/product/comments/comments-add-new-comment';
import CommentsUserTextes from '@/components/complex/product/comments/comments-user-textes';

describe('Home', () => {
  it('CommentsUserTextes', () => {

    render(<CommentsUserTextes />);


    expect(screen.getByTestId('CommentsUserTextes')).toBeInTheDocument();

  })
})