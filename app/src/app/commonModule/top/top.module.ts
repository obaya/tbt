import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TopRouterModule } from './Top-router.module';

import { TopComponent } from './top.component'

//top的子组件必须在这里注册，而非app.module
import { DecorationComponent} from '../../components/decoration/decoration.component';
import { CollectionComponent } from '../../components/collection/collection.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { SettingComponent} from '../../components/setting/setting.component';
import { CollectCompanyComponent } from '../../components/collectCompany/collectCompany.component';
import { CollectPlanComponent } from '../../components/collectPlan/collectPlan.component';

@NgModule({
    declarations: [
        TopComponent,
        DecorationComponent,
        CollectionComponent,
        ToolbarComponent,
        SettingComponent,
        CollectCompanyComponent,
        CollectPlanComponent,
    ],
    imports: [
        BrowserModule,
        TopRouterModule
    ],
    providers: [],
    exports: [TopComponent]
})
export class TopModule { }
