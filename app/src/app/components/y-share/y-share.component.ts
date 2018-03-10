import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'share',
  templateUrl: './y-share.component.html',
  styleUrls: ['./y-share.component.scss']
})
export class YShareComponent implements OnInit {
    
     constructor(private route: ActivatedRoute, private router: Router) { }

     ngOnInit(){
        console.log(6666)
     }
     
     select_L(e){
       if(e.target.nodeName=='A'||e.target.nodeName=='I'){
           var oInfo = e.target.parentNode.parentNode.children[0];
           oInfo.innerHTML='分享成功';
           oInfo.style.WebkitTransform="scale(1)";
           oInfo.style.opacity=0.8;
           setTimeout(function(){
               oInfo.style.WebkitTransform="scale(0)";
               oInfo.style.opacity=0;
           },1000);
       }
     }

}
