import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//二次封装ajax
import { HttpService } from './utils/http.service';

import { AppComponent } from './app.component';

//element-angular
import { ElModule } from 'element-angular'
import 'element-angular/theme/index.css'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//根路由模块
import { RoutersModule } from './router/routers.module';

//公共模块
import {FootModule} from './commonModule/foot/foot.module';
import {TopModule} from './commonModule/top/top.module';
import { RegModule } from './commonModule/reg/reg.module';
import { SearchModule } from './components/search/search.module';

import { HomeComponent } from './components/home/home.component';
import { MineComponent } from './components/mine/mine.component';

import { YCompanyDetailsComponent } from './components/y-company-details/y-company-details.component';
import { YCommentComponent } from './components/y-comment/y-comment.component';
import { YPlanlistComponent } from './components/y-planlist/y-planlist.component';
import { YPlandetailComponent } from './components/y-plandetail/y-plandetail.component';
import { YIntroDetailsComponent } from './components/y-intro-details/y-intro-details.component';
import { MapdepotComponent } from './components/mapdepot/mapdepot.component';
import { MapcommentComponent } from './components/mapcomment/mapcomment.component';
import { shareComponent } from './components/share/share.component';
import { PictureComponent } from './components/picture/picture.component';
import { mapDirective } from './directives/map.directive';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { HomeSelectComponent } from './components/home-select/home-select.component';
import { HomedesignComponent } from './components/homedesign/homedesign.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';


@NgModule({
  //注入组件
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    YCompanyDetailsComponent,
    YCommentComponent,
    YPlanlistComponent,
    YPlandetailComponent,
    YIntroDetailsComponent,
    MapcommentComponent,
    MapdepotComponent,
    PictureComponent,
    shareComponent,
    mapDirective,
    HomeSelectComponent,
    HomedesignComponent,
    BoutiqueComponent,
    HomeComponent,
    SlideshowComponent,
  ],
  //注入模块(包括自己定义的模块：如公共模块)
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutersModule,
    FootModule,
    TopModule,
    RegModule,
    SearchModule,
    ElModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule
  ],
  //依赖注入
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
