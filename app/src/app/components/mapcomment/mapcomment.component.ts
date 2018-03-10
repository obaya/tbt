import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import store from '../../utils/pcz_global';

@Component({
  selector: 'mapcomment',
  templateUrl: './mapcomment.component.html',
  styleUrls: ['./mapcomment.component.scss']
})
export class MapcommentComponent implements OnInit {
     @Input() plan_id: any;
     @Input() content: any;
     @Input() content2: any;
     @Input() dataset1: any;
     @Input() imgUrlA: any;
     @Input() imgUrlc: any;
     @Input() styleDataset: any;
     @Input() datasetend: any;

    constructor(private route: ActivatedRoute, private router: Router) { }
      ngOnInit(){
        this.styleDataset = this.dataset1;
        var arr2 = [];
    
       for(let i =0;i<this.styleDataset.length;i++){
         arr2.push(store.api + "/getImage?url="+this.styleDataset[i].planLogo.split(';')[0])
       } 
        this.imgUrlA = arr2;      
     }

      showPic(e){
          this.plan_id = e.target.className;
      }
      routo(e){
          // this.router.navigate(['/picture'],{relativeTo: this.route});
          this.router.navigate(['/picture'],{ queryParams: { id: this.plan_id } });
      } 
      rout(){
          this.router.navigate(['../homedesign'],{relativeTo: this.route});
       
      }
      trackByName(item){
          return item.id;
      }


}
