import SkeletonLazyImage from '@/components/basic/skeleton-lazy-image'
import Link from 'next/link'
import { Card } from 'primereact/card'
import React from 'react'

export default function SearchResultItem(props:any) {

    const footer=()=>{
        return (<><span>۱۱,۰۰۰</span> <span>تومان</span></>)
    }
  return (


<Card footer={footer} data-testid="search-result-item"  className='col-md-3 search-result-item' >
<Link shallow={true} href={'/' + props.item.title} style={{color:'black'}}>

<SkeletonLazyImage 
                             width={150} height={150}
                            src={`${props.item.src}`} onError={(e:any) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={props.item.alt} className="product-image small-resp-image image-responsive" />
                        
                        <b>{props.item.title}</b> 
<p >

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
</p>
</Link>

</Card>
  )
}
