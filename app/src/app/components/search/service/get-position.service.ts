import { Injectable } from '@angular/core';

@Injectable()
export class GetPositionService {
  positionMess:Object;

  constructor() { 



    }

  loadJS(url,callback){
      let script  =   document.createElement('script');
       let  head =  document.head
          script.src = url;  
          script.onload = callback;
          head.appendChild(script);
          console.log(head)
    }


  
  _mapObj:any;




    getAddress(){
    return new Promise((resolve,rejust)=>{
   var mapObj = new AMap.Map('yp_map_dt',{
    zoom: 15,
   });
  this._mapObj = mapObj
    mapObj.plugin('AMap.Geolocation', function () {
       let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            // zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
    
    
    function onComplete(res){
      let data = {position:[],address:[],addressArr:[]};
      data.address =  res.formattedAddress;
      data.position = res.position;
  //  console.log( res.position)
      var icon = new AMap.Icon({
        image : '../../../../assets/img/search/position.png',//24px*24px
        //icon可缺省，缺省时为默认的蓝色水滴图标，
        size : new AMap.Size(400,533),
        imageSize: new AMap.Size(70,90),
      });  
  
      var marker = new AMap.Marker({
        position: [res.position.O, res.position.P],//marker所在的位置
        offset : new AMap.Pixel(-35,-55),
        icon : icon,//24px*24px
        map:mapObj//创建时直接赋予map属性
        
    });

    var infoWindow = new AMap.InfoWindow({
      isCustom: true,  //使用自定义窗体
       content: `<div style="
                      text-align:center;
       
                 ">
                    <div style="color:#000;text-align:center;background: rgba(0, 0, 0, 0.449);  width:6.32rem; border-radius:0.07rem; padding:0.1rem 0; ">
                      <h4 style="font-size:0.42rem;font-weight:normal; color:#fff">我的位置</h4>
                      <h5 style="font-size:0.26rem;color:#fff; margin:0;font-weight:normal; margin-top: 0.06rem" >位置:${data.address}</h5>
                    </div>

                    <span style="display:inline-block;
                              position:relative;
                      
                              top:-0.1rem;
                              border-bottom:0.2rem solid rgba(0,0,0,0);
                              border-right:0.2rem solid  rgba(0,0,0,0);
                              border-top:0.2rem solid rgba(0, 0, 0, 0.449);
                              border-left:0.2rem solid  rgba(0,0,0,0);
                              
                    "></span>
                 </div>`,
       offset: new AMap.Pixel(0, -15)//窗体位置的偏移量
   });
   //当点击点标记时出现信息窗体
    AMap.event.addListener(marker, 'click', function() {
        infoWindow.open(mapObj, marker.getPosition());
     });
      let ac = res.addressComponent
      data.addressArr  = [ac.province,ac.city,ac.district,ac.street,ac.township,ac.streetNumber]
      resolve(data)
    }
    function onError(res){}
   })
  }

  marker(o,p,title,at){
    var marker = new AMap.Marker({
      position: [o,p],//marker所在的位置
      map:this._mapObj,//创建时直接赋予map属性
      title:title
  });

  var infoWindow = new AMap.InfoWindow({
    isCustom: true,  //使用自定义窗体
     content: `<div style="
                    text-align:center;
     
               ">
                  <div style="color:#000;text-align:center; background: rgba(0, 0, 0, 0.449); width:6.32rem; border-radius:0.07rem; padding:0.2rem 0.1rem; ">
                    <h4 style="font-size:0.42rem;font-weight:normal; color:#fff">${title}</h4>
                    <h5 style="font-size:0.26rem;color:#fff; margin:0;font-weight:normal; margin-top: 0.06rem" >位置:${at}</h5>
                  </div>

                  <span style="display:inline-block;
                            position:relative;
                    
                            top:-0.1rem;
                            border-bottom:0.2rem solid rgba(0,0,0,0);
                            border-right:0.2rem solid  rgba(0,0,0,0);
                            border-top:0.2rem solid rgba(0, 0, 0, 0.449);;
                            border-left:0.2rem solid  rgba(0,0,0,0);
                            
                  "></span>
               </div>`,
     offset: new AMap.Pixel(0, -15)//窗体位置的偏移量
 });
 //当点击点标记时出现信息窗体
  AMap.event.addListener(marker, 'click', ()=>{
      infoWindow.open(this._mapObj, marker.getPosition());
   });

  }


  setNewCenter(position){

    this._mapObj.panTo(position);
  }
  

}
