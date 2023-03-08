import {GlobalConstants} from "@/components/abstract/global";
import {ApiConsts} from "./api-factory";
import {QueryParam} from "@/api-clients/abstract/abstract-crud-service";


const serverType: string = 'real_data';

//const serverType:string='dummy_data';
export function ServerUrlProvider(type: ApiConsts, params: QueryParam[]=[]): string {

    let query = serializeToQuery(params);


    if (serverType == 'real_data') {
        switch (type) {
            case ApiConsts.GET_PRODUCT_TYPE:
                return GlobalConstants.BaseUrl + '/ProductTypes/'

            case ApiConsts.MOST_SELLED:
                return GlobalConstants.BaseUrl + '/Products/MostSelled'

            case ApiConsts.MOST_VIEWED:
                return GlobalConstants.BaseUrl + '/Products/MostViewed'

            case ApiConsts.GET_PRODUCT:
                return GlobalConstants.BaseUrl + '/Products/GetSingle?' + query
        case ApiConsts.SEARCH_PRODUCTS:
                return GlobalConstants.BaseUrl + '/Products/Search?' + query

            default:
                return 'data/products.json';
        }
    } else if (serverType == "dummy_data") {
        switch (type) {
            case ApiConsts.GET_PRODUCT_TYPE:
                return 'data/product_types.json'

            default:
                return 'data/products.json';
        }
    }
    return '';
}

export const serializeToQuery = function (params: QueryParam[]) {
    var str: any = [];
    for (let i = 0; i < params.length; i++) {
        str.push(encodeURIComponent(params[i].key) + "=" + encodeURIComponent(params[i].value));
    }

    return str.join("&");
}