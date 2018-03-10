import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';


@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

    mask: Object = {
        mask:false,
        ensure:true,
        cancel:true
    };
    tipsIdx: number = 0;
    //遮罩提示文本
    tips: Array<any> = [ '已清除缓存','注销',''];

    cacheSize:string = '5.4M';

    constructor() { }

    ngOnInit() {

    }

    logOff(){
        localStorage.removeItem('user_id');
        this.mask['mask'] = !this.mask['mask'];
    }

    emptyCache(_idx){
        this.mask['ensure'] = false;
        this.mask['cancel'] = false;

        let count = 2;
        var timer = setInterval(function(){
            
            this.tips[2] = `${count}秒后清完`
            count--;

            if(count==-1){
                clearInterval(timer)
                this.cacheSize = '已清完所有缓存';
                this.mask['mask'] = !this.mask['mask'];
            }
        }.bind(this),1000);

        this.changeMask(_idx);
    }

    signOut(_idx){
        this.mask['ensure'] = true;
        this.mask['cancel'] = true;

        this.changeMask(_idx);
    }

    changeMask(_idx) {
        this.tipsIdx = _idx;
        this.mask['mask'] = !this.mask['mask'];
    }
    
}
