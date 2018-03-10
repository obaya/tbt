import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Http,RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod} from '@angular/http';
import client from '../../utils/httpclient'

import store from '../../utils/pcz_global';

@Component({
  selector: 'app-y-plandetail',
  templateUrl: './y-plandetail.component.html',
  styleUrls: ['./y-plandetail.component.scss']
})
export class YPlandetailComponent implements OnInit {
    id:number;
    planDetail:object = {};
    planimgUrl:string;
    price:string;

    constructor(private route: ActivatedRoute, private router: Router,private http: Http) {
        route.queryParams.subscribe(queryParams => {  
            this.id = queryParams.id; 
        });  
    }
  

    ngOnInit() {
        //获取方案
        client.get(this.http, "getPlanDetail",{plan_id: this.id}
        ).then((resPlanDetail) => {
            if(resPlanDetail[0] == undefined){
                return;
            }
            var plan = JSON.parse(JSON.stringify(resPlanDetail[0]))
            this.planDetail = plan;
            this.planimgUrl = store.api + "/getImage?url=" + plan.planLogo

            //处理planTag,去掉首空格,截取前两位
            this.price = plan.planTag.replace(/(^\s*)|(\s*$)/g, "").slice(0,2)
            
        })
    }
    goback(){
        history.back()
    }
}
