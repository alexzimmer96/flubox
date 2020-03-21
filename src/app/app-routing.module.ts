import { CreateHouseholdComponent } from './pages/household/create-household/create-household.component';

import { BoxesComponent } from './pages/boxes/boxes.component';
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
    path: 'boxes',
    component: BoxesComponent
  },
  {
    path: 'create-household',
    component: CreateHouseholdComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
