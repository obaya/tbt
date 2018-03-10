import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';


@Component({
    selector: 'toolbar',
    templateUrl: './Toolbar.component.html',
    styleUrls: ['./Toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    mask:boolean = false;
    tipsIdx:number = 0;
    //遮罩提示文本
    tips: Array<any> = ['装修保','装修理财','装修咨询'];

    constructor() { }

    ngOnInit() {

    }

    changeMask(_idx) {
        this.tipsIdx = _idx;
        this.mask = !this.mask;
    }

}
