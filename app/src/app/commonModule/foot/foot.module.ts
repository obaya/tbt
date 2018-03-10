import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FootRouterModule } from './foot-router.module';

import { FootComponent } from './foot.component'


@NgModule({
    declarations: [
        FootComponent,
    ],
    imports: [
        BrowserModule,
        FootRouterModule
    ],
    providers: [],
    exports: [FootComponent]

})
export class FootModule { }
