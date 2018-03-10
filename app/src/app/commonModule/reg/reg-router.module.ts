import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// 登录模块
import { RegComponent } from './reg.component';

// 注册模块
const RegRoutes: Routes = [
    {
        path: 'reg', component: RegComponent,
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(RegRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class RegRouterModule { }
