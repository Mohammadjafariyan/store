import SkeletonLazyImage from '@/components/basic/skeleton-lazy-image'
import { Product } from '@/pages/api/swagger-generated-api classes';
import Link from 'next/link'
import { Card } from 'primereact/card'
import React from 'react'

export default function SearchResultItem(props: any) {

  let item: Product = props.item;
  let src: string = item.producImages != null && item.producImages.length > 0 ? item.producImages[0].path : '';

  const footer = () => {
    return (<><span>{item.price}</span> <span>تومان</span></>)
  }
  return (


    <Card key={props.key} footer={footer} data-testid="search-result-item" className='col-md-3 search-result-item' >
      <Link shallow={true} href={'/' + item.name} style={{ color: 'black' }}>

        <SkeletonLazyImage
          width={150} height={150}
          src={`${src}`} onError={(e: any) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} className="product-image small-resp-image image-responsive" />

        <b>{item.name}</b>
        <p >

{item.description}
         </p>
      </Link>

    </Card>
  )
}
