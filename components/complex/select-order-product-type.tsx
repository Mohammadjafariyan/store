import API_FACTORY, { ApiConsts } from '@/api-clients/abstract/api-factory'
import React, { Component } from 'react'

interface PRODUCT_TYPE {

}

export default class SelectOrderProductType extends Component {


    componentDidMount(): void {
        let service = API_FACTORY(ApiConsts.GET_PRODUCT_TYPE);

        service.getList<PRODUCT_TYPE>(ApiConsts.GET_PRODUCT_TYPE)
            .subscribe(data => {

                console.log('SelectOrderProductType - data:', data);
                this.setState({ product_type_list: data });
            });


    }
    render() {
        return (
            <div data-testid='SelectOrderProductType'>

                <h3>انتخاب جهت سفارش ساخت: </h3>
            </div>
        )
    }
}
