
import {Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import client from '../../utils/httpclient' 

import store from '../../utils/pcz_global';

@Component({
  selector: 'mapdepot',
  templateUrl: './mapdepot.component.html',
  styleUrls: ['./mapdepot.component.scss']
})
export class MapdepotComponent implements OnInit {
  Currentcontent: any = null;
  Currentcontent2: any = null;
  dataset: any = null;
  datasetComment: any = null;
  id: any = null;
  show: any = 'none';
  styleArr: any = null;
  imgUrlB: any = null;
  activeStatus: any = true;
  activeStatus2: any = false;
  @Input() api: string;
 constructor(private http: Http){}
 //单图
 selectItem(){
     this.Currentcontent = 'block';
     this.Currentcontent2 = 'none';
     this.activeStatus = false;
     this.activeStatus2 = true;
 } 
 //多图
 selectItembb(){
     this.Currentcontent = 'none';
     this.Currentcontent2 = 'block';
     this.activeStatus = true;
     this.activeStatus2 = false;
    
 }
 hideNav(e){
   this.show='none';
 }
 showNav(e){

     var nav_content_L = e.target.parentNode.parentNode.children[1];
     var arr = new Set();
     var content = e.target.innerText ;
     this.show='block';

       if(e.target.nodeName=='LI'){
         var lisNav = e.target.parentNode.children;
         for(let i=0;i<lisNav.length;i++){
             lisNav[i].style.color = '#6c6c6c';
             e.target.style.color = "#58bc58";
         }
      }

     if( content== '风格'){
       for(var i=0;i<this.dataset.length;i++){
          if(this.dataset[i].style !=null){
             arr.add(this.dataset[i].style)
          }
       }
     }else if(content== '空间'){
       for(var i=0;i<this.dataset.length;i++){
          if(this.dataset[i].space !=null){
             arr.add(this.dataset[i].space)
          }
       }
     }else if(content== '颜色'){
       for(var i=0;i<this.dataset.length;i++){
          if(this.dataset[i].color !=null){
             arr.add(this.dataset[i].color)
          }
       }
     }else if(content== '面积'){
       for(var i=0;i<this.dataset.length;i++){
        if(this.dataset[i].area !=null){
           arr.add(this.dataset[i].area)
        }
       }
     }

     this.styleArr = arr;   
 }
 getList(e){
      if(e.target.nodeName=='A'){
        var aNavList = e.target.parentNode.children;
        for(let i=0;i<aNavList.length;i++){
            aNavList[i].style.color = '#6c6c6c';
            e.target.style.color = "#58bc58";
            e.target.style.border = "0.013333rem solid #08C63E";
        }
     }

     client.get(this.http, "getPlansStyleList",{style: e.target.innerText}
       ).then((res) => {
        this.datasetComment = res;
        this.show='none';
        var arr = [];
        for(let i =0;i<this.datasetComment.length;i++){
          arr.push(store.api + "/getImage?url="+this.datasetComment[i].planLogo.split(';')[0])
        } 
        this.imgUrlB = arr;
      })
 }
 ngOnInit(){

    client.get(this.http, "getPlansListMap").then((res) => {
        this.dataset = res;
        
     })
 }
 


 


}







