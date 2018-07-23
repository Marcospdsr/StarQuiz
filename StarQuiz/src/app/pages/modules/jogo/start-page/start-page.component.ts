import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { ModalFimComponent } from '../modal-fim/modal-fim.component';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    localStorage.setItem('pontuacao', '0');
    if (localStorage.getItem('pontuacao') !== '0') {
      const dialogRef = this.dialog.open(ModalFimComponent, {
        width: 'auto',
        height: 'auto',
        data: {}
      });

      dialogRef.afterOpen().subscribe(res => {
        console.log('dialog fechado');
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      height: 'auto',
      data: {}
    });

    dialogRef.afterOpen().subscribe(res => {
      console.log('dialog fechado');
    });
  }

}
