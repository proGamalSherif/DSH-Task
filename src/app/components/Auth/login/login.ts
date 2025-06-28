import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Authentication } from '../../../services/authentication';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  LoginForm!:FormGroup;
  constructor(private authServ:Authentication,private fb:FormBuilder){}
  ngOnInit() {
    this.LoginForm=this.fb.group({
      username:['emilys',Validators.required],
      password:['emilyspass',Validators.required]
    })
  }
  get FormUsername():string{
    return this.LoginForm.get('username')?.value as string;
  }
  get FormPassword():string{
    return this.LoginForm.get('password')?.value as string;
  }
  onSubmit(){
    if(this.LoginForm.valid){
      const username = this.FormUsername;
      const password = this.FormPassword;
      this.authServ.AuthLogin(username,password).subscribe({
        next:(res)=>{
          this.authServ.SaveAccessToken(res.accessToken);
        },
        error:(res)=>{
          console.error(res);
        }
      })
    }else{
      console.log('Form Is Invalid')
    }
  }
}
