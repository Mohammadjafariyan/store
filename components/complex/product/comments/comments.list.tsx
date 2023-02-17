import React, { Component } from 'react'
import CommentsSingleComment from './comments-single-comment'

export default class CommentsList extends Component {
  render() {
    return (
      <div data-testid='CommentsList'>


<CommentsSingleComment/>

      </div>
    )
  }
}
