import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Http,RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod} from '@angular/http';
import client from '../../utils/httpclient'
import * as $ from 'jquery';

import store from '../../utils/pcz_global';

@Component({
  selector: 'app-y-planlist',
  templateUrl: './y-planlist.component.html',
  styleUrls: ['./y-planlist.component.scss']
})
export class YPlanlistComponent implements OnInit {
    planList:Array<any> = null;

    constructor(private route: ActivatedRoute, private router: Router,private http: Http) {}

    ngOnInit() {
        var companyName = window.localStorage.getItem('companyName')
        //获取评论
        client.get(this.http, "getPlan",{companyName: companyName}
            ).then((response) => {
            var plan = JSON.parse(JSON.stringify(response))
           
            //转换图片格式
            var planInfo = [];
            //遍历获得的数组plan
            plan.map(function(item){
        
                var planObj = {}
                planObj["logoimgUrl"] = store.api + "/getImage?url=" + item.planLogo;
                planObj["title"] = item.planTitle;
                planInfo.push(planObj)
                planObj["id"] = item.plan_id;
                
            })
            this.planList = planInfo;
        })

        //this.loadData();
    }
    goback(){
        history.back()
    }
    todetail(e){
        var planId = this.planList[e].id
        this.router.navigate(['plandetail'],{ queryParams: { id: planId } });
       
    }

    /*loadData(){
        var range = 5,maxpage = 15,page = 1,totalHeight=0;
        $(window).scroll(function(){
            var scrollHeight = $(window).scrollTop();//页面卷起的高度
            totalHeight = parseFloat($(window).height())+parseFloat(scrollHeight);//页面文档高度+页面卷起的高度页面卷起的高度
            if(($(document).height()-range) <= totalHeight && page != maxpage){
                $('.cont').append('<p>增添条数</p>');
                page++;
            }
        })
    /*实际项目中maxPage并不是前端进行写死的值，这里只是一个简单的demo，实际中前端实现上拉加载对于后台来说是分页功能实现。
    * 因此实际中最大页码数应该是由后台进行返回的
    * range是元素底部距离可视区高度差值，保证了用户在上拉加载的时候的体验度。
    * 
    }
    * */
    

}
