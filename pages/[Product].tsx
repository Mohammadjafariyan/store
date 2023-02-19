import { FooterLinks } from '@/components/complex/footer'
import Header from '@/components/complex/header'
import NavigationBar from '@/components/complex/navigation-bar'
import ProductSingle from '@/components/complex/product/product-single'
import SearchPanel from '@/components/complex/search-parts/search-panel'
import { Divider } from '@mantine/core'
import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div data-testid="Product" >

        <Header />
        <Divider />

        <div className="navbar navbar-expand-lg bg-body-tertiary link-bottom-dec ">
          <div className="container-fluid ">

            <div className="me-5 pe-5" >
              <NavigationBar />


            </div>
          </div>
        </div>

        <div className='row me-5 pe-5 ms-5 ps-5'>
          {/* <SearchPanel /> */}

<ProductSingle/>

        </div>


        <br />

<FooterLinks />

      </div>
    )
  }
}
