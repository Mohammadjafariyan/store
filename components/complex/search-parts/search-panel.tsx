import React, { Component } from 'react'
import SearchFilterPanel from './search-filter-panel'
import SearchResult from './search-result'

export default class SearchPanel extends Component {
  render() {
    return (
      <div data-testid='SearchPanel'>



<div className='row'>


    <div className='col-md-2'  >
    <SearchFilterPanel/>
    </div>
    <div className='col-md-10'  >
    <SearchResult/>
    </div>
</div>






      </div>
    )
  }
}
