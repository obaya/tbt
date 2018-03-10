import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// 登录模块
import { FootComponent } from './foot.component';

// 注册模块
const FootRoutes: Routes = [
    {
        path: 'foot', component: FootComponent,
        // children: [
        //     { path: 'login', component: LoginComponent },
        // ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(FootRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class FootRouterModule { }
