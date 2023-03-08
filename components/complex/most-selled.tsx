import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

import AbstractGetList from '../abstract/abstract-get-list'
import { Button } from 'primereact/button';
import ApiGetMostSelledImp from '@/api-clients/use-case-api/api-get-most-selled';
import API_FACTORY, { ApiConsts } from '@/api-clients/abstract/api-factory';
import SkeletonLazyImage from '../basic/skeleton-lazy-image';
import { Product } from '@/pages/api/swagger-generated-api classes';

/* 
type MyProps = {  };
type MyState = { value: string }; */

export default class MostSelled extends AbstractGetList<any,any> {
    constructor(props: any) {
        super(props, 'products', API_FACTORY(ApiConsts.MOST_SELLED));
        this.state = {
            products: []
        }
    }
    render() {
        const responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '600px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '480px',
                numVisible: 1,
                numScroll: 1
            }
        ];


        const productTemplate = (product: Product) => {

            let item: Product = product;
            let src: string = item.producImages != null && item.producImages.length > 0 ? item.producImages[0].path : '';


            return (
                <div className="product-item" >
                    <div className="product-item-content">
                        <div className="mb-3">
                            <SkeletonLazyImage 
                             width={150} height={150}
                            src={`${src}`} onError={(e:any) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image small-resp-image image-responsive" />
                        </div>
                        <div>
                            <span className={`product-badge `}>{product.name}</span>
                            {/* <span className={`product-badge status-${product.?.toLowerCase()}`}>{product.inventoryStatus}</span> */}
                            <div className="car-buttons mt-5">
                            {/*     <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                                <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                                <Button icon="pi pi-cog" className="p-button-help p-button-rounded" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div dir='ltr' >

                <div className="card  border-less">

                <h5 className='text-center  mt-3'>پر فروش ترین ها</h5>
                <br/>
                    <Carousel value={this.state.products} numVisible={6} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    showIndicators={false}  autoplayInterval={3000} itemTemplate={productTemplate}  />
                    
                </div>

            </div >
        )
    }
}
