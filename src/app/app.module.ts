import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionSheetPageModule } from './paginas/action-sheet/action-sheet.module';
import { AlertPageModule } from './paginas/alert/alert.module';
import { CardPageModule } from './paginas/card/card.module';
import { InicioPageModule } from './paginas/inicio/inicio.module';
import { InfiniteScrollPageModule } from './paginas/infinite-scroll/infinite-scroll.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ActionSheetPageModule,
    AlertPageModule,
    CardPageModule,
    InicioPageModule,
    InfiniteScrollPageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
