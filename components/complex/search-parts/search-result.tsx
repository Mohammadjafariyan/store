import API_FACTORY, { ApiConsts } from '@/api-clients/abstract/api-factory';
import AbstractGetList from '@/components/abstract/abstract-get-list';
import { Card } from 'primereact/card'
import React, { Component } from 'react'
import SearchResultItem from './search-result-item';
import SearchSortPanel from './search-sort-panel'

export default class SearchResult extends AbstractGetList<any,any> {
  constructor(props: any) {
      super(props, 'searchResultList', API_FACTORY(ApiConsts.MOST_SELLED));
      this.state = {
          products: []
      }
  }
  render() {

    

    return (
      <div data-testid="SearchResult">

<div style={{minHeight:'400px',marginTop:'3vh'}}>

<SearchSortPanel/>


<div className='row'>

  {this.state.searchResultList && this.state.searchResultList.map((item:any)=>{

return ( <SearchResultItem item={item}/> );
  })}

</div>

</div>




      </div>
    )
  }
}
