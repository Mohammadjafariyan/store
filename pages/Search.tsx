import Header from '@/components/complex/header'
import NavigationBar from '@/components/complex/navigation-bar'
import { Divider } from '@mantine/core'
import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div data-testid="Search" >

<Header />
<Divider/>

<div className="navbar navbar-expand-lg bg-body-tertiary link-bottom-dec ">
              <div className="container-fluid ">

                <div className="me-5 pe-5" >
<NavigationBar/>


</div>
</div>
</div>


      </div>
    )
  }
}
