import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgModel } from '@angular/forms';

import { HttpService } from '../../utils/http.service';

@Component({
    selector: 'reg',
    templateUrl: './reg.component.html',
    styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
    phone:string = '';
    phoneNo:string = '';
    code:string = '';
    inputCode:string = '';

    //控制遮罩
    mask:boolean = false;
    tipsIdx:number = 0;

    constructor(private http: HttpService) { }

    ngOnInit() {
        
    }  
    
    //接受子组件的属性
    onOutput(value: any) {
        this.mask = value;
    }

    //获取验证码按钮
    sendCode($event){
        this.tipsIdx = 4;
        this.mask = true;
        
        var phoneReg = /(^1[3,4,5,7,8]\d{9}$)/;
        this.phone = this.phone.replace(/\s/g, "");
        
        //不是正确格式手机号码则return
        if (!phoneReg.test(this.phone)){
            this.mask = true;
            this.tipsIdx = 0;
            //处理变量
            this.phoneNo = this.phone;
            this.phone = '';
            return;
        }
        console.log(this)
        
        //处理变量
        this.phoneNo = this.phone;
        this.phone = '';

        this.code = this.createCode(6);
        console.log(this.code)
        console.log(this.phoneNo)

        //请求互亿无线
        let api = 'http://106.ihuyi.com/webservice/sms.php'
        let params = {
            method: 'Submit',
            //分别是：pcz,wsm,
            // account: 'C59361014',
            account:'C27125631',
            // password: '5f256da9c349b1dd009649ebec60d5c7',
            password:'19935bb8be5c83cdd1804fc09b1c54ac',
            mobile: this.phoneNo,
            content: `您的验证码是：${this.code}。请不要把验证码泄露给其他人。`
        }
        this.http.get(api,params).then((res)=>{
            console.log(res)
        })
        
    }

    //登录按钮
    login(){
        if(this.inputCode===this.code && this.inputCode!==''){
            let api = 'createUser';
            let params = {phoneNo:this.phoneNo};
            this.http.get(api,params).then(res=>{
                // console.log(res);
                if(!res['result']){
                    //注册失败,登录成功
                    this.tipsIdx = 1;
                    this.mask = true;
                    location.href = "";
                    let id;
                    console.log(res)
                    if (res['data'] == []) {
                        id = res['data'][0]['user_id']
                    } else {
                        id = 100;
                    }
                    localStorage.setItem('user_id', id);
                }else{
                    //注册成功,登录成功
                    this.tipsIdx = 2;
                    this.mask = true;
                    location.href = "";
                    let id;
                    console.log(res)
                    if(res['data'] == []){
                        id = res['data'][0]['user_id']
                    }else{
                        id = 100;
                    }
                    localStorage.setItem('user_id',id);
                }
            })
            this.inputCode = '';
        }
        else if(this.inputCode!==this.code){
            this.tipsIdx = 3;
            this.mask = true;
        }
        this.inputCode = '';
    }

    //失去焦点
    unFocus(value: string) {
        this.phone += value;
    }

    //失去焦点
    unCode(value: string) {
        this.inputCode += value;
    }

    //改变遮罩状态
    changeMask(){
        this.mask = false;
    }

    //idx位随机验证码
    createCode(_idx){
        var str = '';
        for (var i = 0; i < _idx; i += 1) {
            str += Math.floor(Math.random() * 10);
        }
        return str;
    }

}