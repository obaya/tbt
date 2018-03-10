import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../utils/http.service';

import store from '../../utils/pcz_global';

@Component({
    selector: 'collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
    pageState:boolean = true;
    imgsUrl:Array<any> = [];
    companyCount:number = store.companyCount;

    constructor(private http: HttpService) { }

    ngOnInit() {
        // let api = 'http://10.3.132.99:88/getImage?url='+ this.testUrl;
        // let api = 'http://127.0.0.1:88/getPlansList';
        // this.http.get(api).then((res) => {
        //     for(var idx in res){
        //         this.imgsUrl.push('http://10.3.132.99:88/getImage?url='+ res[idx]['planLogo']);
        //     }
        //     console.log(this.imgsUrl)
        // })

        
    }

    changeCollection(){
        this.pageState = !this.pageState;
    }

}
