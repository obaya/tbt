import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRouterModule }  from './search-router.module'
import { SearchComponent } from './search.component';
import { GetPositionService } from './service/get-position.service';
import { GetDataService } from './service/get-data.service';
import { HttpService } from "../../utils/http.service"
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    SearchRouterModule,
    BrowserAnimationsModule,
    // BrowserModule
  ],
  declarations: [],
  providers: [GetPositionService, GetDataService,HttpService],


})
export class SearchModule { }
