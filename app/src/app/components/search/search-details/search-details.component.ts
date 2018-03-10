import { Component, OnInit, 
   Input, 
  Output, 
  EventEmitter, OnChanges ,SimpleChanges} from '@angular/core';

  import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';    

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss'],

  animations: [
    trigger('showAddresList', [
      state('show', style({
        top: '0px',
      })),
      state('hide',   style({
        top: '100%',
      })),
      transition('* => show', animate('300ms ease-in')),
      transition('* => hide', animate('300ms ease-out'))
    ]),
    trigger('rightSide', [
      state('show', style({
        top: '4.53rem',
      })),
      state('hide',   style({
        top: '100%',
      })),
      transition('* => show', animate('300ms ease-in')),
      transition('* => hide', animate('600ms ease-out'))
    ])
  ]
})
export class SearchDetailsComponent implements OnInit, OnChanges {
  
  @Input() addressList:Object;
  @Output() addressListChange = new EventEmitter();
  @Output() setNewCity = new EventEmitter();
  @Output() cencalCityList =  new EventEmitter();
  @Input() city:string;

  showAddresListKey:String
  constructor() { }

  ngOnInit() {
    this.showAddresListKey = 'show';
  }
  word:any[]
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
         if(changes.addressList){
              this.addressList['record'] = this.getLS("record")
           
           this.word = Object.keys(changes.addressList.currentValue);
         }
   }
   postParent(val){
     this.city = val;
      this.setLS("record",val)
      this.addressList['record'] = this.getLS("record")
     this.setNewCity.emit(val)
     this.showAddresListKey = 'hide';
   }
   setLS(key,val){
      let res = localStorage.getItem(key);
      if(res){
         let data =  JSON.parse(res);
         data.push(val);
         localStorage.setItem(key,JSON.stringify(data))
      }else{
          localStorage.setItem(key,JSON.stringify([val]))     
      }

   }
   getLS(key){
      let res = localStorage.getItem(key);
      if(res){
          return  Array.from( new Set(JSON.parse(res)));
      }
      return false;
   }
   cencal(){
    console.log(321321);
    this.showAddresListKey = 'hide';
     
      //  this.cencalCityList.emit()
   }


   jump($event,val,dthead){
      if(val){
          let arr = []
          for(let val of this.word){
              if(this.addressList[val].length > 0){
                    arr.push(val)
              }
          }
        $event.scrollTop = $event.children[arr.indexOf(val)+1].offsetTop - dthead.clientHeight ;
      }else{
        $event.scrollTop = 0;
      }
   }

}
