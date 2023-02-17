import { GlobalConstants } from '@/components/abstract/global'
import React, { Component } from 'react'
import CommentsSort from './comments/comments-sort'
import CommentsSummary from './comments/comments-summary'
import CommentsList from './comments/comments.list'

export default class ProductComments extends Component {
  render() {
    return (
      <div data-testid='ProductComments'>



<div className='row mt-4'>

    <h4>امتیاز و دیدگاه کاربران</h4>

    <div className='col-md-3'>
  
  <CommentsSummary/>



    </div>  
    
      <div className='col-md-9'>
  <CommentsSort/>

<div className='mt-3'></div>
<CommentsList/>
  
    </div>
</div>



      </div>
    )
  }
}
