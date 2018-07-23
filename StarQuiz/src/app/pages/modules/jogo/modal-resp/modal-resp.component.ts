import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-resp',
  templateUrl: './modal-resp.component.html',
  styleUrls: ['./modal-resp.component.css']
})
export class ModalRespComponent implements OnInit {

  public form: FormGroup;
  nome: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dialofRef: MatDialogRef<ModalRespComponent>) {
    this.form = this.fb.group({
      name: ['']
    });
   }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
  }

  verifResp() {
    console.log(this.data.data.name);
    let pontuacao = localStorage.getItem('pontuacao');
    if (this.form.get('name').value === (this.data.data.name)) {
        if (localStorage.getItem('help') === 'true') {
          pontuacao = (Number(pontuacao) + 5).toString();
        } else {
          pontuacao = (Number(pontuacao) + 10).toString();
        }
        localStorage.setItem('help', 'false');
        localStorage.setItem('pontuacao', pontuacao);

        this.data.success =  true;
      } else {
        this.data.success =  false;
      }
      this.dialofRef.close(this.data);
    }
}
