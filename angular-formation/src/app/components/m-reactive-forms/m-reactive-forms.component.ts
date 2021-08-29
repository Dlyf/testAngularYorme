import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-m-reactive-forms',
  templateUrl: './m-reactive-forms.component.html',
  styleUrls: ['./m-reactive-forms.component.css']
})
export class MReactiveFormsComponent implements OnInit {

  usernameControl = new FormControl('');
  loginForm: FormGroup;
  signUpForm: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = new FormGroup({
      usernameField: new FormControl('John'),
      passwordField: new FormControl('')
    })

    this.signUpForm = this.fb.group({
      usernameField: ['', Validators.required],
      passwordField: ['', [Validators.required],Validators.minLength(8)],
      passwordConfirmField: '' 
    })
  }

  ngOnInit(): void {
  }

  sayHello() {
    console.log(this.usernameControl);
  }

  inscription() {
    console.log(this.signUpForm);
    if (this.signUpForm.status === "INVALID") {

    }
  }

  checkPasswordControl() {
    const passwordField = this.signUpForm.controls.passwordField;
    if (passwordField.hasError('required')) {
      return "Le champ est requis"
    }
    if (passwordField.hasError('minLength')) {
      return " Le mot de passe doit faire au moins caractères"
    }
    return ""
  }
}
