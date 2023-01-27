import { MOCK_SMALL_LIST } from '@/__mock_server__/mock-list';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { ApiConsts } from './api-factory';
import {  ServerUrlProvider } from './server-url-provider';

export interface IAbstractCRUDService {
    getList<T>(url:ApiConsts): Observable<T[]>;
}


export class AbstractCRUDService implements IAbstractCRUDService {

    getList<T>(urltype:ApiConsts): Observable<T[]> {


        let url =ServerUrlProvider(urltype);
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
        /* 
                let list=of(MOCK_SMALL_LIST);
        
                return list as Observable<T[]>; */
    }
}