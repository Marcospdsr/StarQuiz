import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoRoutes } from './pages/modules/jogo/jogo_routing.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/jogo/start',
    pathMatch: 'full'
  },
   ...JogoRoutes
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
