import API_FACTORY, {ApiConsts} from '@/api-clients/abstract/api-factory';
import AbstractGetList from '@/components/abstract/abstract-get-list';
import {ProductsClient} from '@/pages/api/swagger-generated-api';
import {Product} from '@/pages/api/swagger-generated-api classes';
import {Card} from 'primereact/card'
import React, {Component, useEffect} from 'react'
import {SearchCacheManager} from './search-cache';
import SearchResultItem from './search-result-item';
import SearchSortPanel from './search-sort-panel'
import {selectProductListState, setProductList} from "@/components/slices/product-list-slices";
import {selectProductState, setProduct} from "@/components/slices/product-single-slices";
import {useDispatch, useSelector} from "react-redux";


export default function SearchResult(props) {
    //client: ProductsClient = new ProductsClient();//AbstractGetList<any,any> {

    const productList: Product[] = useSelector(selectProductListState);

    
    console.log('-----------------------')
    console.log(productList)
    const dispatch = useDispatch();

    useEffect(() => {


    }, [props]); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div data-testid="SearchResult">

            <div style={{minHeight: '400px', marginTop: '3vh'}}>

                <SearchSortPanel/>


                <div className='row'>

                    {productList && productList.map((item: Product) => {

                        return (<SearchResultItem key={item.name} item={item}/>);
                    })}

                </div>

            </div>


        </div>
    )

}
