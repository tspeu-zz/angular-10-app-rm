import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasPage } from './recetas.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasPage
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasPageRoutingModule {}
