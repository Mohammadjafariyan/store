/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductBasicInfo from '@/components/complex/product/product-basic-info';
import CommentsAddNewComent from '@/components/complex/product/comments/comments-add-new-comment';
import CommentsSingleComment from '@/components/complex/product/comments/comments-single-comment';

describe('Home', () => {
  it('CommentsSingleComment', () => {

    render(<CommentsSingleComment />);


    expect(screen.getByTestId('CommentsSingleComment')).toBeInTheDocument();

  })
})