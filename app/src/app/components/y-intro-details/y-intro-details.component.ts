import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Http,RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod} from '@angular/http';
import client from '../../utils/httpclient'

@Component({
  selector: 'app-y-intro-details',
  templateUrl: './y-intro-details.component.html',
  styleUrls: ['./y-intro-details.component.scss']
})
export class YIntroDetailsComponent implements OnInit {
    id: number ;
    companyInfo:object = {};
    introduce:string;

    constructor(private route: ActivatedRoute, private router: Router,private http: Http) {
        route.queryParams.subscribe(queryParams => {  
            this.id = queryParams.id; 
        });  
    }

    ngOnInit() {
        client.get(this.http, "getCompany",{id: this.id}
        ).then((resCompany) => {
            this.companyInfo = resCompany[0] || {}
            this.introduce = resCompany[0].introduce.slice(1,-1)
        })
    }
    goback(){
        history.back()
    }
}
