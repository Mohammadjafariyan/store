/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductBasicInfo from '@/components/complex/product/product-basic-info';
import CommentsAddNewComent from '@/components/complex/product/comments/comments-add-new-comment';
import CommentsSummary from '@/components/complex/product/comments/comments-summary';

describe('Home', () => {
  it('CommentsSummary', () => {

    render(<CommentsSummary />);


    expect(screen.getByTestId('CommentsSummary')).toBeInTheDocument();

  })
})