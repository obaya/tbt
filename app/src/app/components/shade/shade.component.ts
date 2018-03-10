import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'shade',
    templateUrl: './shade.component.html',
    styleUrls: ['./shade.component.scss']
})
export class ShadeComponent implements OnInit {
    @Input() mask:boolean;
    //遮罩提示文本
    tips: Array < any > =['不是完整的11位手机号或者正确的手机号前七位', '用户已存在，将直接登录', '注册成功，将跳转页面','验证码错误','已发送验证码'];
    @Input() tipsIdx:number;
    
    @Output() outputvalue = new EventEmitter();

    constructor() { }

    ngOnInit() {
        
    }

    //点击登录按钮把mask弹射给父组件
    changeMask() {
        this.mask = false;
        this.outputvalue.emit(this.mask);
    }

}
