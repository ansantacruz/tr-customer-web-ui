import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasTabComponent } from './ofertas-tab.component';


const routes: Routes = [
  {
    path: '',
    component: OfertasTabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasTabRoutingModule {}
