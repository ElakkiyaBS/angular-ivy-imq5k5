import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private formb:FormBuilder){}
  ngOnInit(){
    this.loginForm = this.formb.group({
      userName : ['',Validators.required],
      password : ['',Validators.required]
    });
  }
  onSubmit() {
console.log(this.loginForm.value);
  }
}
