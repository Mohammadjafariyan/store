import {GlobalConstants} from '@/components/abstract/global';
import {MOCK_SMALL_LIST} from '@/__mock_server__/mock-list';
import {catchError, map, Observable, of, switchMap} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';
import {ApiConsts} from './api-factory';
import {ServerUrlProvider} from './server-url-provider';

export interface IAbstractCRUDService {
    getList<T>(url: ApiConsts): Observable<T[]>;

    getList<T>(url: ApiConsts): Observable<T[]>;

    getSingleAsync<T>(urltype: ApiConsts, params: QueryParam[]): Promise<T>;


    search<T>(url: ApiConsts, params: QueryParam[]): Promise<T>;
}


export interface QueryParam {
    key: string;
    value: string | number;
}

export class AbstractCRUDService implements IAbstractCRUDService {
    search<T>(urltype: ApiConsts, params: QueryParam[]): Promise<T> {
        let url: string = ServerUrlProvider(urltype, params);

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            }).then((res: T) => res);
    }

    getSingleAsync<T>(urltype: ApiConsts, params: QueryParam[]): Promise<T> {

        let url: string = ServerUrlProvider(urltype, params);

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            }).then((res: T) => res);
    }


    getList<T>(urltype: ApiConsts): Observable<T[]> {

        let url = ServerUrlProvider(urltype);
        const data = Observable.create((observer: any) => {
            fetch(url)
                .then(response => response.json()) // or text() or blob() etc.
                .then(data => {
                    observer.next(data.data);
                    observer.complete();
                })
                .catch(err => observer.error(err));
        });

        return data;

        /*    let url =ServerUrlProvider(urltype);
           const data = Observable.create((observer: any) => {
               fetch( url )
                   .then(response => response.json()) // or text() or blob() etc.
                   .then(data => {
                       observer.next(data.data);
                       observer.complete();
                   })
                   .catch(err => observer.error(err));
           });
   
           return data;
    */

        /* 
                let list=of(MOCK_SMALL_LIST);
        
                return list as Observable<T[]>; */
    }
}