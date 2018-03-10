import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Http,RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod} from '@angular/http';
import client from '../../utils/httpclient'
import 'rxjs/add/operator/map'
import * as $ from 'jquery'

@Component({
  selector: 'app-y-comment',
  templateUrl: './y-comment.component.html',
  styleUrls: ['./y-comment.component.scss']
})

export class YCommentComponent implements OnInit {
    shejiFen:any;
    fuwuFen:any;
    shigongFen:any;
    num:any;
    hp:any;
    zp:any;
    cp:any;
    hpArr:Array<any> = null;
    zpArr:Array<any> = null;
    cpArr:Array<any> = null;
    quanbu:Array<any> = null;
    commentInfo:Array<any> = null;
    constructor(private route: ActivatedRoute, private router: Router,private http: Http) { 
        
    }

    ngOnInit() {
        $('#rang li').eq(0).addClass('active')

        var companyName = window.localStorage.getItem('companyName')
        client.get(this.http, "getComment",{companyName: companyName}
        ).then((resComment) => {
            var comment = JSON.parse(JSON.stringify(resComment))
        console.log(comment)
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

              //显示星星
              this.sshowStar(she)
              this.fshowStar(fu)
              this.gshowStar(shi)
            }

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
    //切换高亮
    checked(e){
      $('#rang li').removeClass('active')
      $(e.target).parent('li').addClass('active')
      if($(e.target).parent('li').find('.comType').html() == "好评"){
          
          this.commentInfo = this.hpArr
      }else if($(e.target).parent('li').find('.comType').html() == "中评"){
          
          this.commentInfo = this.zpArr

      }else if($(e.target).parent('li').find('.comType').html() == "差评"){
          
          this.commentInfo = this.cpArr
      }else{
          this.commentInfo = this.quanbu
      }
    }
    sshowStar(n){
        var con_wid=document.getElementById("s_star_con").offsetWidth;
        var del_star=document.getElementById("s_del_star");
        console.log(con_wid);
        
        //透明星星移动的像素
        var del_move=(n*con_wid)/5/75;
        
        del_star.style.backgroundPosition=-del_move+"rem 0rem";
        del_star.style.left=del_move+"rem";
    }
    fshowStar(n){
        var con_wid=document.getElementById("f_star_con").offsetWidth;
        var del_star=document.getElementById("f_del_star");
        console.log(con_wid);
        
        //透明星星移动的像素
        var del_move=(n*con_wid)/5/75;
        
        del_star.style.backgroundPosition=-del_move+"rem 0rem";
        del_star.style.left=del_move+"rem";
    }
    gshowStar(n){
        var con_wid=document.getElementById("g_star_con").offsetWidth;
        var del_star=document.getElementById("g_del_star");
        console.log(con_wid);
        
        //透明星星移动的像素
        var del_move=(n*con_wid)/5/75;
        
        del_star.style.backgroundPosition=-del_move+"rem 0rem";
        del_star.style.left=del_move+"rem";
    }
    
}
