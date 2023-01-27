import ApiGetMostViewedImp from "../use-case-api/api-get-most-selled";
import ApiGetMostSelledImp from "../use-case-api/api-get-most-viewed";
import ApiGetProductTypeListImp from "../use-case-api/api-get-product-type";
import { AbstractCRUDService, IAbstractCRUDService } from "./abstract-crud-service";



export enum ApiConsts{
    MOST_VIEWED,
    GET_PRODUCT_TYPE,
    MOST_SELLED
}

export default function API_FACTORY(name:ApiConsts):IAbstractCRUDService {
 
    switch (name) {
        case ApiConsts.MOST_SELLED:
            return new ApiGetMostSelledImp();
            break;
            case ApiConsts.MOST_VIEWED:
                return new ApiGetMostViewedImp();
            break;
            case ApiConsts.GET_PRODUCT_TYPE:
                return new ApiGetProductTypeListImp();
            break;
    
        default:
            return new ApiGetMostViewedImp();
            break;
    }
}
