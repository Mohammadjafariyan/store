import { Divider } from '@mantine/core'
import { Card } from 'primereact/card'
import React from 'react'
import { InfoBadgesProduct } from '../info-badges-product'
import SimilarProducts from '../similar-products'
import ProductBasicInfo from './product-basic-info'
import ProductComments from './product-comments'
import ProductCommentsPartLine from './product-comments-part-line'
import ProductImageGallery from './product-image-gallery'
import ProductLinkParts from './product-link-parts'
import ProductProperties from './product-properties'
import ProductQuestions from './product-questions'
import ProductSellerInfo from './product-seller-info'

export default function ProductSingle() {
  return (
    <div className='row mt-5' data-testid="ProductSingle">

<div className='col-md-5'>
<div className='row'>
    <div className='col-md-2'><ProductLinkParts/></div>
    <div className='col-md-10'>
<ProductImageGallery />
    
    </div>
</div>
</div>
<div className='col-md-5'>

<ProductBasicInfo/>


</div>
<div className='col-md-2'>
  <ProductSellerInfo/>
</div>


<div className='row'>

  <Card className='mt-2 mb-2'>
  <InfoBadgesProduct/>
  </Card>

</div>
<div className='row'>

<Card style={{height:'350px' , overflow:'hidden'}} >
  <SimilarProducts/>
  </Card>
</div>

<div className='row mt-4'>
<ProductCommentsPartLine/>

<div className='col-md-9'>
  
<Card>



<div className='row' id='c-1'>
<ProductProperties/>
  
</div>
<div className='row' id='c-2'>
<ProductComments/>
  
</div> 

<div className='row' id='c-3'>
<ProductQuestions/>
  
</div>
</Card>
</div>
<div className='col-md-3'>

  <ProductSellerInfo/>
</div>


  
</div>
    </div>
  )
}
