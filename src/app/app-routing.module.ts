import { SelectExtrasComponent } from './pages/order/select-extras/select-extras.component';
import { SelectBoxesComponent } from './pages/order/select-boxes/select-boxes.component';
import { SelectResidentsComponent } from './pages/order/select-residents/select-residents.component';

import { OverviewComponent } from './pages/overview/overview.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'order/select-residents',
    component: SelectResidentsComponent
  },
  {
    path: 'order/select-boxes',
    component: SelectBoxesComponent
  },
  {
    path: 'order/select-extras',
    component: SelectExtrasComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
