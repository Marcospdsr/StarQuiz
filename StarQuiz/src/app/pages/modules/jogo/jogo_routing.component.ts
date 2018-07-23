
import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { GameComponent } from './game/game.component';

export const JogoRoutes: Routes = [
  {
    path: 'jogo',
    redirectTo: 'jogo/start'
  },
  {
    path: 'jogo/start',
    component: StartPageComponent
  },
  {
    path: 'jogo/game',
    component: GameComponent
  },
];
