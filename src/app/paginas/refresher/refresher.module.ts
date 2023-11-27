import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherPageRoutingModule } from './refresher-routing.module';

import { RefresherPage } from './refresher.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
    declarations: [RefresherPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RefresherPageRoutingModule,
        ComponentesModule,
    ],
    exports: [RefresherPage],
})
export class RefresherPageModule {}
