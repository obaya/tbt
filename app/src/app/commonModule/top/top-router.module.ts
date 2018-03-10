import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './top.component';
import { CollectCompanyComponent} from '../../components/collectCompany/collectCompany.component'
import { CollectPlanComponent } from '../../components/collectPlan/collectPlan.component';


// 注册模块
const TopRoutes: Routes = [
    {
        path: 'mine/top', 
        component: TopComponent, 
        children:[
            { path: 'collectC', component: CollectCompanyComponent},
            { path: 'collectP', component: CollectPlanComponent },
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(TopRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class TopRouterModule { }
