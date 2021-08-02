import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangesRoutingModule } from './exchanges-routing.module';
import { ExchangesComponent } from './exchanges.component';


@NgModule({
  declarations: [
    ExchangesComponent
  ],
  imports: [
    CommonModule,
    ExchangesRoutingModule
  ]
})
export class ExchangesModule { }
