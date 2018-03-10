import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../utils/http.service';
import option from './type';

import store from '../../utils/pcz_global';

//console.log(option.type[0].type1)
//console.log(colorOption)
//console.log(colorOption);

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {
		data:any[];
		typeArr1:Array<any> = option.type[0].type1;
		typeArr2:Array<any> = option.type[0].type2;
		typeArr3:Array<any> = option.type[0].type3;
		
		filtrate:string = '';
		 
		api2: any = store.api;
		
		
//		colorArr1:Array<any> = colorOption.color1
		color:string = "不限";

		
		styleSelect:Boolean = false;
		
		filtrateType:Boolean = false;
		
		
	  constructor(private http: HttpService) { }
		
	  ngOnInit() {
	  	let api = 'getBoutique';
           this.http.get(api).then((res) => {
//             console.log(res);
               this.data = res as any[];
//             console.log(this.data)
           })
	  }
	  height(e,val){
	  		this.color = val;
	  		this.filtrate = e.target.innerHTML
//	  		console.log(this.filtrate)
	  		
	  		this.http.get('getFiltrate', {filtrate: this.filtrate}).then((res:any)=>{
//	  					console.log(res)
	  					if(!res){
	  							this.data = this.data;

	  					}else{
	  							this.data = res
	  							this.styleSelect = !this.styleSelect
	  							this.filtrateType = true
	  					}
	  					
	  		}).catch((error)=>{
	  				return Promise.reject(error)
	  		})
	  }

	  controlStyle(){
	  		this.styleSelect = !this.styleSelect
	  }

}
