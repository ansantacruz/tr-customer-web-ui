import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ofertas',
        loadChildren: () => import('../pages/ofertas-tab/ofertas-tab.module').then(m => m.OfertasTabModule)
      },
      {
        path: 'construir-compra',
        loadChildren: () => import('../pages/construir-compra-tab/construir-compra-tab.module').then(m => m.ConstruirCompraTabModule)
      },
      {
        path: 'configuraciones',
        loadChildren: () => import('../pages/configuraciones-tab/configuraciones-tab.module').then(m => m.ConfiguracionesTabModule)
      },
      {
        path: 'compras',
        loadChildren: () => import('../pages/compras-tab/compras-tab.module' ).then(m => m.ComprasTabModule)
      },
      {
        path: '',
        redirectTo: '/tabs/ofertas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ofertas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
