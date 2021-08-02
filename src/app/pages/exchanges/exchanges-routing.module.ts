import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangesDetailsComponent } from './exchanges-details/exchanges-details.component';
import { ExchangesComponent } from './exchanges.component';

const routes: Routes = [
  {
    path: '', component: ExchangesComponent
  },
  {
    path: ':id', component: ExchangesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangesRoutingModule { }
