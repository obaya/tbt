import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../utils/http.service';

import store from '../../utils/pcz_global';

@Component({
    selector: 'collectCompany',
    templateUrl: './collectCompany.component.html',
    styleUrls: ['./collectCompany.component.scss']
})
export class CollectCompanyComponent implements OnInit {
    companyNames:Array<any> = [];
    dataset:Array<any> = [];
    imgsUrl:Array<any> = [];
 
    constructor(private http: HttpService) { }

    ngOnInit() {
        let user_id = localStorage.getItem('user_id') || 100;
        let api = 'getCompanyNames';
        let params = { user_id: user_id };

        this.http.get(api, params).then(res => {
            store.companyCount = res['length'];
            for(let i=0;i<res['length'];i++){
                this.companyNames.push(res[i]['companyName']);
            }

            let api2 = 'getCompanyByName';
            let params2 = { companyNames : this.companyNames};
            this.http.get(api2,params2).then(result=>{
                this.dataset = JSON.parse(JSON.stringify(result));
                for (var idx in res) {
                    //用户未登录或者用户无收藏
                    let logo = result!==[] ? result[idx]['logo'] : 'http://pic.to8to.com/user/89/headphoto_6946389.jpg?1470194048' ;

                    this.imgsUrl.push(store.api + '/getImage?url='+ logo);
                }
            })
        })
    }

    trackByIdx(idx) {
        return idx;
    }

    sendCompanyName($event,_idx){
        console.log(this.companyNames[_idx])
    }
}
