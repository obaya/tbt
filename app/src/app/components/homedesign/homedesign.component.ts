import { Component, OnInit } from '@angular/core';


import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
//貌似现在最新本已一起打包发布了，所以并不需要这一步
//import { HttpService } from '../../utils/http.service';
import 'rxjs/add/operator/toPromise';

import place from './cityLevel'



@Component({
  selector: 'homedesign',
  templateUrl: './homedesign.component.html',
  styleUrls: ['./homedesign.component.scss']
})
export class HomedesignComponent implements OnInit {
		City:Boolean = false;
		places:Array<any> = place.regions;
		wind:Boolean = false;
		wind2:Boolean = false;
		wind3:Boolean = false;
		color:Number;
		
		curCity:string;
		cInValue:string;
		cInValue2:string;
		cInValue3:string;
		
		userName:string;
		phone:string;
		focus(){
				this.City = !this.City;
		}
		
	  constructor(private http:	Http ) { }
	
	  ngOnInit() {
				
	  	
	  }
		getKeys(item){
        return Object.keys(item);
    }
	
		//二级联动城市
		clickCity(e, _idx){
				this.color = _idx
				this.cInValue = ''
				this.places.forEach((item)=>{
						if(e.target.innerHTML == item.label){
								this.curCity = item.regions;
								this.cInValue += e.target.innerHTML
								console.log(this.cInValue)
						}
						
				})
		}
		//点击市后写入
		cityInput(e){
				this.cInValue2 = ''
				this.City = !this.City;
				this.cInValue2 +=e.target.innerHTML
				console.log(this.cInValue2)
				this.cInValue3 = this.cInValue + '省' + '-' + this.cInValue2
				console.log(this.cInValue3)
				this.curCity = ''
				console.log(this.userName)
				console.log(this.phone)
		}
		//信息提交
		messSubmit(){
				if(this.userName == undefined ){
						this.wind2 = !this.wind2	
						return false
				}
				if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.phone))){
						this.wind = !this.wind
						return false
				}
			
				console.log('提交')
				let api = 'http://localhost:88/insertApply'
				this.http.request(api, new RequestOptions({
          	method: RequestMethod.Post,
          	body: {userName:this.userName,phone:this.phone,city: this.cInValue3},
          	headers: new Headers({
            	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          	})
       })).toPromise().then(response => {
       				console.log(response);
//							var resBody = JSON.parse(response._body);
//							console.log(resBody)
							if(response){
									this.wind3 = !this.wind3
							}
							
							
        }).catch((error) => {
            	console.log(error);
            	return Promise.reject(error);
        });
		
		}//post
		confirm(){
				this.wind = !this.wind
		}
		confirm2(){
				this.wind2 = !this.wind2
		}
		confirm3(){
				this.wind3 = !this.wind3
		}

}
