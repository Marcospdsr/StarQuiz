import { StartPageComponent } from './start-page/start-page.component';
import { Routes } from '@angular/router';

export const JogoRoutes: Routes = [
  {
    path: 'jogo',
    redirectTo: 'jogo/start'
  },
  {
    path: 'jogo/start',
    component: StartPageComponent
  },
];
