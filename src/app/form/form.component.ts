import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
const   passExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
//no quiere funcionar XD {8,20}
@Component({
  selector: 'audi-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  rForm: FormGroup;
  post: any ;
  nameAlert = 'This field is required';
  passAlert = 'Minimum 8 characters, at least one letter and one number';

  constructor(private _fb: FormBuilder) {
    this.rForm = _fb.group({
      'name': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.pattern(passExp)])],
      'keep': ''
    })

   }
  addPost(inf: any): void {
    inf.keep = inf.keep ? true : false;
    this.post = {
    name: inf.name,
    password: inf.password,
    keep: inf.keep
    }
  }
  ngOnInit() {

  }

}
