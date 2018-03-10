import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegRouterModule } from './reg-router.module';

import { RegComponent } from './reg.component'

import { ShadeComponent } from '../../components/shade/shade.component';


@NgModule({
    declarations: [
        RegComponent,
        ShadeComponent
    ],
    imports: [
        BrowserModule,
        RegRouterModule
    ],
    providers: [],
    exports: [RegComponent]

})
export class RegModule { }
