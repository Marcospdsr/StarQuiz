import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-fim',
  templateUrl: './modal-fim.component.html',
  styleUrls: ['./modal-fim.component.css']
})
export class ModalFimComponent implements OnInit {

  public form: FormGroup;
  public pontuacao: string;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.pontuacao = localStorage.getItem('pontuacao');
  }

  salvar() {
    localStorage.setItem('pontuacaoFinal', this.form.value + this.pontuacao);
  }

}
