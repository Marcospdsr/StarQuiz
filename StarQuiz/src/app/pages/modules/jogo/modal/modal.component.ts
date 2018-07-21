import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public diologRef: MatDialogRef<ModalComponent>) { }

  ngOnInit() {
    console.log('dialog aberto');
  }

}
