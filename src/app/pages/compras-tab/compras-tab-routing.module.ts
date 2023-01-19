import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasTabComponent } from './compras-tab.component';




const routes: Routes = [
  {
    path: '',
    component: ComprasTabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasTabRoutingModule {}
