import { Badge } from '@mantine/core'
import React, { Component } from 'react'

export default class CommentsCommentRate extends Component<any,any> {

    constructor(props:any) {
      super(props);
      
    }
  render() {
    return (
      <div data-testid='CommentsCommentRate'>
        

        {this.props.rate > 4 && <Badge color={'green'}></Badge>}
        {this.props.rate > 2 && this.props.rate < 4 && <Badge size='lg' color={'warning'}>{this.props.rate}</Badge>}
        {this.props.rate > 0 && this.props.rate < 2 && <Badge color={'warning'}>{this.props.rate}</Badge>}


      </div>
    )
  }
}
