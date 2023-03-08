import { LocalStorageManager } from "@/components/abstract/cache-manager";
import { GlobalConstants } from "@/components/abstract/global";
import {ProductGroup} from "@/pages/api/swagger-generated-api classes";

export class SearchCacheManager {
    static SetPage(arg0: number) {
        var cache = SearchCacheManager.getSearchObject();

        cache.page = arg0;

        SearchCacheManager.setSearchObject(cache);
    }
    static setSearchObject(cache: SearchCacheObject) {

        LocalStorageManager.set(GlobalConstants.CACHE_SEARCH_OBJECT, cache);
    }


    static getSearchObject(): SearchCacheObject {

        let searchObject = LocalStorageManager.get(GlobalConstants.CACHE_SEARCH_OBJECT);
        if (!searchObject) {
            searchObject = new SearchCacheObject();
        } else {
            return searchObject;
        }

        LocalStorageManager.set(GlobalConstants.CACHE_SEARCH_OBJECT, searchObject);
        return searchObject;
    }
}


export class SearchCacheObject {
    text!: string;
    category!: ProductGroup;
    page: number=0;
}