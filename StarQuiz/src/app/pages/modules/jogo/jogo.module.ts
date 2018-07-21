import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material';
import { GameComponent } from './game/game.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [StartPageComponent, GameComponent, ModalComponent],
  entryComponents: [ModalComponent]
})
export class JogoModule { }
