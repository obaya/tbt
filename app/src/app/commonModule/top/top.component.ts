import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'common-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss']
})

export class TopComponent implements OnInit {
    //页面类型
    title:Object = {
        'decoration':'装修免费服务',
        'collection':'我的收藏',
        'toolbar':'工具箱',
        'setting':'设置',
        'collectCompany':'收藏的公司',
        'collectPlan':'收藏的方案'
    };
    pageType:string;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.pageType = this.route.snapshot.params.pageType;
    }

}
