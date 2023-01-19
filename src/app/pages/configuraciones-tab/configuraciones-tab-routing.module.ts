import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesTabComponent } from './configuraciones-tab.component';



const routes: Routes = [
  {
    path: '',
    component: ConfiguracionesTabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionesTabRoutingModule {}
