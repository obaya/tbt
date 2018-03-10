import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../utils/http.service';

import store from '../../utils/pcz_global';

//import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

//console.log(HttpService)
@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	data:any[];
	newData:any[];
	dataNum:any = 0;

	//反爬虫图片接口
	api2:any = store.api;

    constructor(private http: HttpService) { }

    ngOnInit() {
        let api = 'getSegmentation';
           this.http.get(api).then((res) => {
            //    console.log(res);
               this.data = res as any[];
           })
    }
    test(e,a){
 
    	if(e.target.scrollTop == a.scrollHeight-a.offsetHeight){
    		   	this.dataNum += 4;
    		// console.log(this.dataNum)
    		let api = 'getSegmentation';
			this.http.get(api, {num: this.dataNum}).then((res:any) => {
				this.data = [...this.data,...res]
	            // console.log(res);	
	       }).catch((error) => {
	            return Promise.reject(error);
	        }); 
    	}else{

    	}
    }

}
