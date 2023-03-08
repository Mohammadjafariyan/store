import {Badge, Group, Rating} from '@mantine/core'
import React from 'react'
import ProductSendCard from './product-send-card'
import ProductSummaryProperties from './product-summary-properties'
import {useSelector} from "react-redux";
import {selectProductState} from "@/components/slices/product-single-slices";
import {Product} from "@/pages/api/swagger-generated-api classes";

export default function ProductBasicInfo() {

    const product:Product = useSelector(selectProductState);

    return (
        <div data-testid='ProductBasicInfo'>

            <h4>{product?.name}
            </h4>
            <hr/>

            <div dir='ltr'>
                <Group>
                    <div><small className='text-muted'>(13)</small> ۳.۷</div>
                    <Rating fractions={2} defaultValue={1.5} readOnly> </Rating>
                    <a href='#'><Badge dir='rtl' color="success">15 دیدگاه </Badge></a>
                    <a href='#'><Badge dir='rtl' color="success">16 پرسش </Badge></a>
                </Group>

            </div>

            <br/>

            <div className='row'>
                <div className='col-md-11'>
                    <i className='pi pi-info-circle'></i> <small className='text-muted' style={{color: '#333'}}>درخواست
                    مرجوع کردن کالا در گروه لوازم جانبی صوتی و تصویری خودرو با دلیل انصراف از خرید تنها در صورتی قابل
                    تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).
                </small>
                </div>

            </div>

            <br/>
            <div className='row'>

                <ProductSummaryProperties/>
            </div>

            <br/>

            <ProductSendCard/>

            <br/>

        </div>
    )
}
