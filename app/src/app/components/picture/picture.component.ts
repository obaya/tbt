import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import {Http} from '@angular/http';
import client from '../../utils/httpclient';

import store from '../../utils/pcz_global';

@Component({
  selector: 'common-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  Currentcontent: Object = null;
   iNow: any = 0;
   iX: any = 0;
   id: any = 0;
   iStartTouchX: any = 0;
   iStartX: any = 0;
   oList: any = null;
   aNav: any = null;
   iDis: any = null;
   iW: any = null;
   mapDataset: any = null;
   imgUrlc: any = null;
   imgUrlc2: string = '../../../assets/img/mapdebot/getImage.jpg';
   imgUrlc3: string = '../../../assets/img/mapdebot/getImage2.jpg';
   imgUrlc4: string = '../../../assets/img/mapdebot/getImage3.jpg';
   imgUrlc5: string = '../../../assets/img/mapdebot/map3.jpg';
   show :string ='none';
 
   TransformList :string =null;
   transitionList :string =null;
   constructor(
       private activatedRoute: ActivatedRoute,//这里需要注入   ActivatedRoute模块   
       private http: Http,
       private router: Router,
       ){
     activatedRoute.queryParams.subscribe(queryParams => {
       this.id = queryParams.id || this.activatedRoute.snapshot.params.id;
     });
   }
   ngOnInit() {
       client.get(this.http, "getPlansIdMap",{id: this.id}).then((res) => {
           this.mapDataset = res;
           var arr3 = [];
           for(let i =0;i<this.mapDataset.length;i++){
             arr3.push(store.api + "/getImage?url="+this.mapDataset[i].planLogo.split(';')[0])
           } 
           this.imgUrlc = arr3;
        })
   }
   touchstart(e){
     this.iW = document.documentElement.clientWidth;
     if(e.target.nodeName=='IMG'){
         this.oList = e.target.parentNode.parentNode;
         this.aNav = e.target.parentNode.parentNode.parentNode.children[1].children[1].children;
   
      } 
      // if(e.target.nodeName=='SECTION'){
      //    this.oList = e.target.children[0].children[0];
      //    this.aNav = this.oList.parentNode.children[1].children[1].children;
      // }
     e=e.changedTouches[0];
     this.iStartTouchX=e.pageX;
     this.iStartX=this.iX;
   }
   touchmove(e){
     e=e.changedTouches[0];
     this.iDis=e.pageX-this.iStartTouchX;
     this.iX=this.iStartX+this.iDis;
     this.oList.style.WebkitTransform=this.oList.style.transform="translateX("+this.iX+"px)";
   }
   touchend(e){

     this.iNow=this.iX/this.iW;
     if( this.iNow !=0){
       this.iNow=-Math.round(this.iNow);
       if(this.iNow<0){
         this.iNow=0;
       }
       if(this.iNow>this.aNav.length-1){
         this.iNow=this.aNav.length-1;
       }
       this.iX=-this.iNow*this.iW;
       this.oList.style.transition="0.5s";
       this.oList.style.WebkitTransform=this.oList.style.transform="translateX("+this.iX+"px)";
       for(var i=0;i<this.aNav.length;i++){
         this.aNav[i].className = '';
       }
       this.aNav[this.iNow].className = 'active';
     }
   }
   goback(){
      history.back();
   }
   trackByName(item){
       return item.id
   }
   routo(){
       // this.router.navigate([''],{relativeTo: this.route});
       // this.router.navigate(['/picture'],{ queryParams: { id: this.plan_id } });
   }
   shareShow(e){
      
       if(this.show =='none'){
          this.show = "block";
        }else{
           this.show ="none";
        }
   }
   parentEvent(obj){
      this.show = obj.b;
   }

  
   
}
