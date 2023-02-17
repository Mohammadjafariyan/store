import { GlobalConstants } from '@/components/abstract/global'
import { Button } from '@mantine/core'
import React from 'react'

export default function ProductAddToCart() {
  return (
    <div data-testid="product-add-to-cart">



<Button style={{backgroundColor:GlobalConstants.PRIMARY_CSS , width:'100%'}}>افزودن به سبد</Button>

    </div>
  )
}
