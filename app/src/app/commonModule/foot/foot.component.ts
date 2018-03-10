import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'common-foot',
    templateUrl: './foot.component.html',
    styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {
    active:boolean = true;
    pageType: Array<any> = ['', 'imgslist','companyslist','mine'];

    constructor() { }

    ngOnInit() {
        var url = document.location.href.slice(22);
        let idx = this.pageType.indexOf(url);
        
        this.changeType(idx);
    }

    changeType(_idx){
        let pTag = document.querySelectorAll('.commonFoot p');
        let iTag = document.querySelectorAll('.commonFoot .iconfont');

        // pTag[_idx].classList.add('active');
        // iTag[_idx].classList.add('active');
    }

}
