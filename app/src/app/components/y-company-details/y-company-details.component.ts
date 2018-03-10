import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Http,RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod} from '@angular/http';
import client from '../../utils/httpclient'
import * as $ from 'jquery'

import store from '../../utils/pcz_global';

@Component({
    selector: 'app-y-company-details',
    templateUrl: './y-company-details.component.html',
    styleUrls: ['./y-company-details.component.scss']
})
export class YCompanyDetailsComponent implements OnInit {
    //需要获取列表中带过来的id
    id: any;

    //需要获取登录时存起来的userId
    userId:any ;

    //这里是获取到的数据
    companyAt: any = '暂无地址' ;
    companyInfo: Object = {};
    //第一个方案
    planInfo:object = {};
    totalPlan:any;
    commentList:  Object = {};
    pfshow: boolean ;
    planshow: boolean;
    logoimgUrl: any ;
    planimgUrl: any ;
    shejiFen:any;
    fuwuFen:any;
    shigongFen:any;
    num:any;
    quanbu:Array<any> = null;
    commentInfo:Array<any> = null;
    hp:any;
    zp:any;
    cp:any;
    hpArr:Array<any> = null;
    zpArr:Array<any> = null;
    cpArr:Array<any> = null;
    shareshow: boolean = false;
    show: string = 'none';
    constructor(private route: ActivatedRoute, private router: Router,private http: Http) {
        //获取列表页传递的公司id---整合时放出来
        route.queryParams.subscribe(queryParams => {  
           this.id = queryParams.id || this.route.snapshot.params.id; 
        });
     }

    ngOnInit() {
        //获取localstorage中的userId---整合时放出来
        this.userId = localStorage.getItem('user_id')

        //获取公司
        client.get(this.http, "getCompany",{id: this.id}
        ).then((res) => {
            var company = JSON.parse(JSON.stringify(res[0]));
            this.companyInfo = company

            var dizhi = company.companyAt;
            this.companyAt = dizhi.substring(1,dizhi.length-1).replace(/(^\s*)|(\s*$)/g,"");
            window.localStorage.setItem('companyName',company.companyName)
            this.logoimgUrl = store.api + "/getImage?url=" + company.logo
            
            //获取方案
            client.get(this.http, "getPlan",{companyName: company.companyName}
            ).then((response) => {
                var resArr = JSON.parse(JSON.stringify(response))
                if (response[0]==undefined){
                    return;
                }
                var plan = JSON.parse(JSON.stringify(response[0]))
                this.planInfo = plan
                if(resArr.length < 1){
                    this.planshow = false
                }else{
                    this.planshow = true
                }
                this.totalPlan = resArr ? resArr.length : 0;
                this.planimgUrl = store.api + "/getImage?url=" + plan.planLogo
            })

            //获取评价
            client.get(this.http, "getComment",{companyName: company.companyName}
            ).then((resComment) => {
                var comment = JSON.parse(JSON.stringify(resComment))
        
                if(comment.length>0){
                  //是一个数组对象
                  //如果servicePhase是设计与服务就是设计,否则就是施工
                  var sheji = [];
                  var shigong = [];
                  var fuwu = [];
                  this.num = comment.length
                  this.commentInfo = comment
                  this.quanbu = comment
                  //判断好评 中评 差评的个数
                  var hp = []
                  var zp = []
                  var cp = []
                  comment.map(function(item){
                      var score1 = item.score1.slice(3,4)*1;
                      var score2 = item.score2.slice(3,4)*1;
                      if(item.servicePhase == "设计与服务"){
                          sheji.push(score1)
                      }else{
                          shigong.push(score1)
                      }
                      fuwu.push(score2)
                      if(score1 > 3 && score2 > 3){
                        hp.push(item)
                        //hp.push('好')
                      }else if(score1 < 3 && score2 < 3){
                        cp.push(item)
                        //cp.push('差')
                      }else{
                        zp.push(item)
                        //zp.push('中')
                      }
                  })
                  this.hp = hp.length;
                  this.zp = zp.length;
                  this.cp = cp.length;
                  this.hpArr = hp;
                  this.zpArr = zp;
                  this.cpArr = cp;
                  var she = Number(this.pingJunFen(sheji)).toFixed(1);
                  this.shejiFen = she;
                  var fu = Number(this.pingJunFen(fuwu)).toFixed(1);
                  this.fuwuFen = fu;
                  var shi = Number(this.pingJunFen(shigong)).toFixed(1);
                  this.shigongFen = shi;

                    this.commentList = comment
                    if(comment.length < 1){
                        this.pfshow = false
                    }else{
                        this.pfshow = true
                    }
                }
            });

            //根据公司名和用户id去判断这个用户是否收藏了这家公司
            client.get(this.http, "getshoucang", {companyName: company.companyName, userId:this.userId}
            ).then((resshoucang) => {
                var resCang = JSON.parse(JSON.stringify(resshoucang))
                if(resCang.length>0){
                    $('.icon-shoucang').addClass('shoucang')
                }
            });
        })

    }
    //计算各个项的平均分
    pingJunFen(arr){
        var total = 0;
        arr.map(function(i){
            total+=i;
        })
        return total/arr.length;
    }
    goback(){
        history.back()
    }
    shoucang(e){
        var shoucang = e.target
        if($(shoucang).hasClass('shoucang') == false){
            
            $(shoucang).addClass('shoucang')
            //发送收藏的请求
            client.get(this.http, "shoucang", {companyName: this.companyInfo["companyName"], userId: this.userId}
            ).then((shoucangRes) => {
            });
        }else{
            $(shoucang).removeClass('shoucang')
            //取消收藏
            client.get(this.http, "delshoucang", {companyName: this.companyInfo["companyName"], userId: this.userId}
            ).then((delshoucangRes) => {

            });
        }
       
    }
    toComment(companyName){
        this.router.navigate(['comment']);

    }
    toPlanList(companyName){
        this.router.navigate(['planlist']);
        //this.router.navigate(['planlist'],{ queryParams: { name: companyName } });
    }
    toIntroDetail(companyName){
        //this.router.navigate(['introdetail']);
        this.router.navigate(['introdetail'],{ queryParams: { id: this.id } });
    }
    share(){
        this.shareshow = true;
    }
    parentEvent(obj) {
        this.show = obj.b;
    }
    shareShow(e) {

        if (this.show == 'none') {
            this.show = "block";
        } else {
            this.show = "none";
        }
    }

}
