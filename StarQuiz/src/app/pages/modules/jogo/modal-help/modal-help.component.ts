import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PeopleService } from '../services/people.service';


@Component({
  selector: 'app-modal-help',
  templateUrl: './modal-help.component.html',
  styleUrls: ['./modal-help.component.css']
})
export class ModalHelpComponent implements OnInit {

  public form: FormGroup;
  public movies: Array<string> = new Array();
  public vehicles: Array<string> = new Array();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private service: PeopleService) {
    this.form = this.fb.group({
      specie: [''],
      height: [''],
      hair: [''],
      gender: [''],
      movies: [''],
      vehicles: [''],
    });
  }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
    this.form.patchValue({height: this.data.data.height});
    this.form.patchValue({hair: this.data.data.hair});
    this.form.patchValue({gender: this.data.data.gender});


    this.service.get(this.data.data.specie[0]).subscribe(resp => {
      this.form.patchValue({specie: resp.name});
    });

    this.data.data.vehicles.forEach(element => {
      this.service.get(element).subscribe(resp => {
        this.vehicles.push(resp.name);
      });
    });

  }

}
