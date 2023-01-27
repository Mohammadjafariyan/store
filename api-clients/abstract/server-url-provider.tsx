import { ApiConsts } from "./api-factory";

export function ServerUrlProvider(type:ApiConsts){
switch (type) {
    case ApiConsts.GET_PRODUCT_TYPE:
        return 'data/product_types.json'
        break;

    default:
        return 'data/products.json';
        break;
}
}