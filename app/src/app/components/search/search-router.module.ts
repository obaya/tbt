import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router'
import { SearchComponent }  from './search.component'
import { SearchDetailsComponent } from './search-details/search-details.component'
import { FormsModule } from "@angular/forms";
import {FootModule} from '../../commonModule/foot/foot.module';
const appRoutes: Routes = [
  //跟路由
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    FormsModule,
    FootModule
  ],
  exports:[
    RouterModule
  ] , declarations: [
    SearchComponent
    ,SearchDetailsComponent
  ]  

})
export class SearchRouterModule { }
