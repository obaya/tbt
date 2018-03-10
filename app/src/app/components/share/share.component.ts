import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class shareComponent implements OnInit {
     Transform :any =null;
     opacity :any =null;
     @Input() showbg: string;
     @Output()  parentAttr = new EventEmitter();
     constructor(private route: ActivatedRoute, private router: Router) { }

     ngOnInit(){

     }
     
     select_L(e){
       if(e.target.nodeName=='A'||e.target.nodeName=='I'){
           var oInfo = e.target.parentNode.parentNode.children[0];
           oInfo.innerHTML='分享成功';
           this.Transform="scale(1)";
           this.opacity=0.8;
           setTimeout(function(){
               this.Transform="scale(0)";
               this.opacity=0;
           },1000);
       }
     }
     shareHidden(e){
        this.showbg = "none";
        this.parentAttr.emit({
          status:true,
          b:this.showbg
        })


     }

}
