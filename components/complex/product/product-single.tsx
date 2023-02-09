import React from 'react'
import ProductBasicInfo from './product-basic-info'
import ProductImageGallery from './product-image-gallery'
import ProductLinkParts from './product-link-parts'

export default function ProductSingle() {
  return (
    <div className='row mt-5' data-testid="ProductSingle">

<div className='col-md-4'>
<div className='row'>
    <div className='col-md-2'><ProductLinkParts/></div>
    <div className='col-md-10'>
<ProductImageGallery />
    
    </div>
</div>
</div>
<div className='col-md-4'>

<ProductBasicInfo/>


</div>
<div className='col-md-4'></div>


    </div>
  )
}
