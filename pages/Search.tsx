import Header from '@/components/complex/header'
import NavigationBar from '@/components/complex/navigation-bar'
import SearchPanel from '@/components/complex/search-parts/search-panel'
import {Divider} from '@mantine/core'
import React, {Component, useEffect} from 'react'
import {GetServerSideProps} from "next";
import API_FACTORY, {ApiConsts} from "@/api-clients/abstract/api-factory";
import {
    ApiResponseOfListOfProduct, ApiResponseOfSearchResponseType,
    IApiResponseOfListOfProduct,
    Product
} from "@/pages/api/swagger-generated-api classes";
import {SearchCacheManager} from "@/components/complex/search-parts/search-cache";
import {useDispatch, useSelector} from "react-redux";
import {selectProductState, setProduct} from "@/components/slices/product-single-slices";
import {selectProductListState, setProductList} from "@/components/slices/product-list-slices";


interface SearchProps {
    productList: Product[];
}

export default function Search(props: SearchProps) {

    const productList = useSelector(selectProductListState);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(setProductList(props.productList));

    }, [props]); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div data-testid="Search">

            <Header/>
            <Divider/>

            <div className="navbar navbar-expand-lg bg-body-tertiary link-bottom-dec ">
                <div className="container-fluid ">

                    <div className="me-5 pe-5">
                        <NavigationBar/>


                    </div>
                </div>
            </div>

            <div className='row me-5 pe-5 ms-5 ps-5'>
                <SearchPanel/>


            </div>

        </div>
    )

}


// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export const getServerSideProps: GetServerSideProps = async (context) => {


    const {res} = context;
    let text: string = context.query["text"] as string;
    let category: string = context.query["category"] as string;


    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )


    const apiGetProduct = API_FACTORY(ApiConsts.SEARCH_PRODUCTS)

    let apiresult: ApiResponseOfSearchResponseType = await apiGetProduct.search<ApiResponseOfSearchResponseType>(ApiConsts.SEARCH_PRODUCTS, [
        {
            key: 'text',
            value: text ?? ''
        },
        {
            key: 'category',
            value: category ?? ''
        }
    ]);


    let productList = apiresult.data?.list;


    return {
        props: {productList} as SearchProps,
    }
}
