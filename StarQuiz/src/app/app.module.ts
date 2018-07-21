import { AppRoutingModule } from './app_routing.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogoModule } from './pages/modules/jogo/jogo.module';
// import { ModalComponent } from '../app/pages/modules/jogo/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent
    // ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    JogoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [ModalComponent]
})
export class AppModule { }
