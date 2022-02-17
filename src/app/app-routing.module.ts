import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'countdown',
    pathMatch: 'full'
  },
  {
    path: 'countdown',
    loadChildren: () => import('./pages/countdown/countdown.module').then( m => m.CountdownPageModule)
  },
  {
    path: 'eventlist',
    loadChildren: () => import('./pages/eventlist/eventlist.module').then( m => m.EventlistPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
