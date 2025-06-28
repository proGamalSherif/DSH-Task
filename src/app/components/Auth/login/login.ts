import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Authentication } from '../../../services/authentication';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../../../services/alert-service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  LoginForm!: FormGroup;
  constructor(private authServ: Authentication, private fb: FormBuilder, private alertServ: AlertService,private routes:Router) { }
  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get FormUsername(): string {
    return this.LoginForm.get('username')?.value as string;
  }
  get FormPassword(): string {
    return this.LoginForm.get('password')?.value as string;
  }
  onSubmit() {
    if (this.LoginForm.valid) {
      this.alertServ.loading();
      const username = this.FormUsername;
      const password = this.FormPassword;
      this.authServ.AuthLogin(username, password).subscribe({
        next: (res) => {
          this.authServ.SaveAccessToken(res.accessToken);
          this.alertServ.closeAll();
          this.alertServ.success('User Logged => ', this.authServ.getDecodedToken().firstName)
          this.routes.navigate(['Homepage'])
        },
        error: (err) => {
          this.alertServ.closeAll();
          console.log(err)
          this.alertServ.error(err.message);
        }
      })
    } else {
      this.alertServ.closeAll();
      this.alertServ.error('Form Is Invalid')
    }
  }
}
