import {FooterLinks} from '@/components/complex/footer'
import Header from '@/components/complex/header'
import NavigationBar from '@/components/complex/navigation-bar'
import ProductSingle from '@/components/complex/product/product-single'
import SearchPanel from '@/components/complex/search-parts/search-panel'
import {Divider} from '@mantine/core'
import React, {Component, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectProductState, setProduct} from "@/components/slices/product-single-slices";
import API_FACTORY, {ApiConsts} from "@/api-clients/abstract/api-factory";
import {GetServerSideProps} from "next";
import {Product} from "@/pages/api/swagger-generated-api classes";
import {selectProductListState} from "@/components/slices/product-list-slices";
import {useRouter} from "next/router";

interface ProductPageProps {
    Product: Product;
}

export default function ProductPage(props: ProductPageProps) {

    const router = useRouter()


    const productInCache: Product[] = useSelector(selectProductListState);
    const dispatch = useDispatch();

    useEffect(() => {
        const {Product} = router.query

        let found = productInCache.find(f => f.name == Product);

        if (found)
            dispatch(setProduct(found));


    }, [props]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div data-testid="Product">

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
                {/* <SearchPanel /> */}

                <ProductSingle/>

            </div>


            <br/>

            <FooterLinks/>

        </div>
    )

}

/*
// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export const getServerSideProps: GetServerSideProps = async (context) => {


    const {res} = context;
    let name: string = context.query["Product"] as string;


    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )


    const apiGetProduct = API_FACTORY(ApiConsts.GET_PRODUCT)

    let product = await apiGetProduct.getSingleAsync<Product>(ApiConsts.GET_PRODUCT, [{
        
        key: 'name',
        value: name

    }]);


    return {
        props: {product},
    }
}*/
