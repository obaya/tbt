import {RequestMethod, RequestOptions} from '@angular/http';

import store from './pcz_global';

let baseUrl = store.api + '/';

function getUrl(_url){
    if(_url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get: (http, api, params = {}) => {
        return new Promise((resolve, reject) => {
            // http.get(getUrl(api)).subscribe((res) => {
            //     resolve(res.json());
            // })
            params['_'] = Math.random();
            http.request(getUrl(api), new RequestOptions({
                method: RequestMethod.Get,
                search: params
            })).toPromise().then((res) => {
                resolve(res.json());
            })
        })
    }
}