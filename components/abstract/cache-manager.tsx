import { GlobalConstants } from "./global";

// Try to get data from the cache, but fall back to fetching it live.

export class LocalStorageManager {

    static  get(name: string) {


        return JSON.parse(window?.localStorage?.getItem(name) ?? '{}');
    }

    static  set(name: string, obj: any) {

        window?.localStorage?.setItem(name, JSON.stringify(obj));
    }



}
/*   try {
    const data = await getData();
    console.log({ data });
  } catch (error) {
    console.error({ error });
  } */