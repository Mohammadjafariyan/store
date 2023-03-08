import ApiGetMostViewedImp from "../use-case-api/api-get-most-selled";
import ApiGetMostSelledImp from "../use-case-api/api-get-most-viewed";
import ApiGetProductTypeListImp from "../use-case-api/api-get-product-type";
import {AbstractCRUDService, IAbstractCRUDService} from "./abstract-crud-service";
import ApiGetProductImp from "@/api-clients/use-case-api/api-get-product";
import ApiSearchProductImp from "@/api-clients/use-case-api/api-search-products";


export enum ApiConsts {
    MOST_VIEWED,
    GET_PRODUCT_TYPE,
    MOST_SELLED,
    GET_PRODUCT,
    SEARCH_PRODUCTS,
}

export default function API_FACTORY(name: ApiConsts): IAbstractCRUDService {

    switch (name) {
        case ApiConsts.MOST_SELLED:
            return new ApiGetMostSelledImp();
        case ApiConsts.GET_PRODUCT:
            return new ApiGetProductImp();
        case ApiConsts.MOST_VIEWED:
            return new ApiGetMostViewedImp();
        case ApiConsts.GET_PRODUCT_TYPE:
            return new ApiGetProductTypeListImp();
      case ApiConsts.SEARCH_PRODUCTS:
            return new ApiSearchProductImp();

        default:
            return new ApiGetMostViewedImp();
    }
}
