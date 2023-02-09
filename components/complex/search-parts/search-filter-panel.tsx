import { Card } from 'primereact/card'
import React, { Component } from 'react'
import SearchSampleForm from './search-sample-form'

export default class SearchFilterPanel extends Component {
  render() {
    return (
      <div data-testid="SearchFilterPanel">

<Card style={{minHeight:'400px',marginTop:'5vh'}}>
 
<SearchSampleForm/>

</Card>

      </div>
    )
  }
}
