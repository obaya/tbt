import { Component, OnInit,OnChanges ,SimpleChanges } from '@angular/core';
import { GetPositionService } from './service/get-position.service'
import {ActivatedRoute,Router} from '@angular/router'
import { HttpService } from '../../utils/http.service'
import store from '../../utils/pcz_global';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';                       
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('changeOnloadCartool', [
      state('off', style({
        height: '0px',
      })),
      state('on',   style({
        height: '.73rem',
      })),
      transition('* => on', animate('10000ms ease-in')),
      transition('* => off', animate('2300ms ease-out'))
    ]),
    trigger('changeMap', [
      state('show', style({
        left: '0px',
      })),
      state('hide',   style({
        left: '100%',
      })),
      transition('* => show', animate('500ms ease-in')),
      transition('* => hide', animate('500ms ease-out'))
    ])
  ]
})
export class SearchComponent implements OnInit,OnChanges {

  constructor(private getPosition:GetPositionService,
    private route: ActivatedRoute,
    private router: Router,
    private  http:HttpService
  
  
  ) { }
  address:Object;
  skip:number = 0;
  impose:number = 15;
  businessList:any;
  businessKey:boolean = false;
  city:string;


  addressList:Object;
  //显示分类下标
  showbox:boolean = false;
  adds:boolean = false;
  soft:boolean = false;

  classifyFoucs:string = '全城' 
  softFoucs:string = 'hot' 
  

  addressNameArr:Object = []
  
  showCitylistKey:boolean = false;
  loadData:boolean  = false;
  loadDataCartool:string = 'on';

  mapKey:string = ''
  

  mainScarchKey:boolean = false;

  
  mainScarchValue:any;
  mainScarchData:any;
  ngOnInit() {
      this.city = "北京";
      this.getCompanyData();
      
      this.businessKey = true;
      this.getPosition.getAddress().then((data)=>{
        // console.log(data)
      
        this.address = data;
        this.city = this.address['addressArr'][1].replace('市','')
  
        this.getClassify();
        this.getPositionList();


        return new Promise((resolve,reject)=>{
          
            this.http.get('getCompanyList',
                          {'city':this.city,'skip':this.skip,'impose':this.impose}
                        ).then((res)=>{
                          // console.log(res);
                          resolve(res);
                         })
        })
     }).then((res:any)=>{
       for(let item in res){
          res[item].logo = store.api + `/getImage?url=`+res[item].logo 
       }
       this.businessList = Array.from( new Set(res));;

       this.businessKey = true;

         
     })


     this.http.get('getAddressName').then((res)=>{
      //  console.log(res);
          this.addressNameArr = res;
     })
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log(changes)

   }

  trackById(idx,val){
      return val.id
  }

  getClassify(){
    this.http.get('getClassify',
    {'city':this.city}
    ).then((res)=>{
    // console.log(res);
    this.addressList =  res;
   })
  }
  showClassify(str){
      // console.log(str);
    this.showbox = true;
     this.adds = true;

    switch(str){
      case "adds":
        this.adds = true;
        this.soft = !this.adds;
      break;
      case "soft":
        this.adds = false;
        this.soft = !this.adds;
      break;
    }
      
  }
  hideClassify(){
    this.adds = false;
    this.soft = false;
    this.showbox = false;
    
  }

  changeClassify(val,$le){
      this.skip = 0;
      this.classifyFoucs = val;

      
      this.getCompanyData()
      $le.scrollTop=0


  }

  changeSoft(val,$le){
    this.skip = 0;
    this.softFoucs = val;
    
    this.getCompanyData()
    $le.scrollTop=0


  }
  getCompanyData(){
    this.http.get('getCompanyList',
    {'city':this.city,'skip':this.skip,'impose':this.impose,'section':this.classifyFoucs=='全城'?'':this.classifyFoucs,'soft':this.softFoucs=='hot'?'':this.softFoucs}
   ).then((res:any[])=>{
        for(let item in res){
          res[item].logo = store.api + `/getImage?url=`+res[item].logo 
        }
             for(var i=0;i<res.length;i++){
                for(var k=i+1;k<res.length;k++){
                   res[i].companyName , res[k].companyName
                   if(res[i].companyName == res[k].companyName){
                       res[k]=" "
                   }
                }
             }
            let newarr =  Array.from( new Set(res));
             newarr.splice(newarr.indexOf(" "),1)
         this.businessList = newarr
        
   })
  }
  getCompanyDataA(){
    this.http.get('getCompanyList',
    {'city':this.city,'skip':this.skip,'impose':this.impose,'section':this.classifyFoucs=='全城'?'':this.classifyFoucs,'soft':this.softFoucs=='hot'?'':this.softFoucs}
   ).then((res)=>{
        for(let item in res){
          res[item].logo = store.api + `/getImage?url=`+res[item].logo 
          var key = true;
        for(let val  of this.businessList){
          // console.log(val)
            if(val.companyName == res[item].companyName){
              key = false;
              continue;
            }
        }
        if(key){
          this.businessList. push(res[item])
        }
 
        }
        this.loadData  = false;
       
        
   })
  }

  setNewCity(val, $le){
    this.skip = 0;    
     this.classifyFoucs = "全城";
    this.city = val;
    $le.scrollTop=0
    this.getClassify();

    this.setCenter(
    

    )
    this.getPositionList()
    this.getCompanyData()
  }


  showCityList(){
     this.showCitylistKey = !this.showCitylistKey;
  }

    mainSide($event,cibody){  
      if(cibody.offsetHeight  < $event.target.clientHeight + $event.target.scrollTop + 2){
          if(!this.loadData){ 
            this.skip  += 15;
            this.getCompanyDataA();
     
          }
          this.loadDataCartool = "off"
          this.loadData  = true;

      } 
      // console.dir();
      
      //  console.log($event.target.scrollTop);
    }


    showMap(){
      this.mapKey = 'show';
    }

    hideMap(){
      this.mapKey = 'hide';
    }

  
    getSearchData($el){
      console.dir($el.value)

      if(!$el.value.trim()){
          return false;
      }
        this.http.get('getLikeSearch',
          {'city':this.city,'keyword':$el.value}
        ).then((res:any)=>{
              if(!res.length){
                  return false;
              }
              for(let item in res){
                res[item].logo = store.api + `/getImage?url=` +res[item].logo 
              }
                   for(var i=0;i<res.length;i++){
                      for(var k=i+1;k<res.length;k++){
                         res[i].companyName , res[k].companyName
                         if(res[i].companyName == res[k].companyName){
                             res[k]=" "
                         }
                      }
                   }
                  let newarr =  Array.from( new Set(res));
                   newarr.splice(newarr.indexOf(" "),1)

                   this.mainScarchData = newarr;
                   console.log(this.mainScarchData );
        })
     
    }

    hideMainScarch(myinput){
      this.mainScarchValue = ""
      
      this.mainScarchKey = false;
      this.mainScarchData = 0;

    }
    showMainScarch(){
      this.mainScarchKey = true;
    }


    skipRouter(id){
      this.router.navigate(['company'],{queryParams:{id:id}})
    }


    getPositionList(){
            this.http.get('getCompanyList',
            {'city':this.city,'skip':0,'impose':999999}
          ).then((res:any[])=>{
                for(let item in res){
                  res[item].logo = store.api + `/getImage?url=` +res[item].logo 
                }
                    for(var i=0;i<res.length;i++){
                        for(var k=i+1;k<res.length;k++){
                          res[i].companyName , res[k].companyName
                          if(res[i].companyName == res[k].companyName){
                              res[k]=" "
                          }
                        }
                    }
                    let newarr =  Array.from( new Set(res));
                    newarr.splice(newarr.indexOf(" "),1)
                     let qty = newarr.length;
                    for(let items  in newarr){
                      newarr[items].companyAt = newarr[items].companyAt.replace(/'/g,"");
                      newarr[items].companyAt = newarr[items].companyAt.trim();
                      ((title,companyAt)=>{

                  
                          this.http.get('http://restapi.amap.com/v3/geocode/geo',{city:this.city,address:newarr[items].companyAt,key:'1e4868e35eff7a08abe12a11ed4cfdda'}).then((res:any)=>{
                                if(res.status == 1){
                                  // let position = res.geocodes[0].location.split(',')
                                  if(res.geocodes[0]){
                                  let position = res.geocodes[0].location.split(',')
                                  //  console.log(title)
                                  this.getPosition.marker(position[0],position[1],title,companyAt);
                                      
                                  }

                                }

                          })  
                      })( newarr[items].companyName,newarr[items].companyAt)                    
                    }

                    
                   
                    // console.log(newarr);
          })
    }


    setCenter(){
      this.http.get('http://restapi.amap.com/v3/geocode/geo',{city:this.city,address:this.city,key:'1e4868e35eff7a08abe12a11ed4cfdda'}).then((res:any)=>{
            let position = res.geocodes[0].location.split(',')
            this.getPosition.setNewCenter(position)
        

      })
    }
    




}
