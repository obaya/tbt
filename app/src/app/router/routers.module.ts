import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//组件
import { HomeComponent } from '../components/home/home.component';
import { MineComponent } from '../components/mine/mine.component';
import { YCompanyDetailsComponent } from '../components/y-company-details/y-company-details.component';
import { YCommentComponent } from '../components/y-comment/y-comment.component';
import { YPlanlistComponent } from '../components/y-planlist/y-planlist.component';
import { YPlandetailComponent } from '../components/y-plandetail/y-plandetail.component';
import { YIntroDetailsComponent } from '../components/y-intro-details/y-intro-details.component';
import { MapdepotComponent } from '../components/mapdepot/mapdepot.component';
import { PictureComponent } from '../components/picture/picture.component';
import { shareComponent } from '../components/share/share.component';
import { HomedesignComponent } from '../components/homedesign/homedesign.component';
import { BoutiqueComponent } from '../components/boutique/boutique.component';


const appRoutes: Routes = [
    //跟路由
    { path: '', component: HomeComponent },
    { path: 'mine', component: MineComponent},
    { path: 'mine', component: MineComponent},
    { path: 'company', component: YCompanyDetailsComponent},
    { path: 'comment', component: YCommentComponent},
    { path: 'planlist', component: YPlanlistComponent},
    { path: 'plandetail', component: YPlandetailComponent},
    { path: 'introdetail', component: YIntroDetailsComponent},
    { path: 'mapdepot', component: MapdepotComponent },
    { path: 'map', component: MapdepotComponent },
    { path: 'picture', component: PictureComponent },
    { path: 'share', component: PictureComponent },
    { path: 'homedesign', component: HomedesignComponent },
    { path: 'boutique', component: BoutiqueComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutersModule { }
