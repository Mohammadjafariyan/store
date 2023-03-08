import { Observable } from 'rxjs';
import { GlobalConstants } from '@/components/abstract/global';
import { ApiResponseOfListOfProduct, Product } from './swagger-generated-api classes';


export class ProductsClient {
  search(text: string, name: any, arg2: number) {
    return fetch(GlobalConstants.BaseUrl + '/Products/Search?text=' + (text ?? "") + '&category=' + (name ?? "") + '&page=' + arg2)
      .then(response => response.json()); // or text() or blob() etc.
  }

}