import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartPageComponent } from './start-page/start-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { GameComponent } from './game/game.component';
import { ModalRespComponent } from './modal-resp/modal-resp.component';
import { ModalHelpComponent } from './modal-help/modal-help.component';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { ModalFimComponent } from './modal-fim/modal-fim.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MatTableModule,
    RouterModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [StartPageComponent, GameComponent, ModalComponent, ModalRespComponent, ModalHelpComponent,  ModalFimComponent],
  entryComponents: [ModalComponent, ModalRespComponent, ModalHelpComponent, ModalFimComponent]
})
export class JogoModule { }
