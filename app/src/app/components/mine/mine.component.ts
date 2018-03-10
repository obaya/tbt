import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../utils/http.service';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
    pageType: Array<string> = ['decoration','collection','toolbar','setting']
    nickName:string = '未登录';
    //用户登录状态
    userId = localStorage.getItem('user_id');
    //user动态路由
    userRouter: string = '../reg';

    constructor(private http: HttpService) { }

    ngOnInit() {
        let api = 'getUserById';

        if(this.userId!=null){
            let params = { user_id: this.userId };
            this.http.get(api, params).then(res => {
                this.nickName = res[0]['nickName'];
            })
            this.loginState();
        }
    }
    
    //登录状态
    loginState(){
        this.userId == null ? this.userRouter='../reg' : this.userRouter='./';
    }
}
