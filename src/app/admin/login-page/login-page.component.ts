import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces/user";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  authForm: FormGroup;
  message: string;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.authFormInit()
  }

  authFormInit(){
    this.authForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submit(form:FormGroup) {
    if (form.invalid) {
      return;
    }
    const user: User = {
      login: form.value.login,
      password: form.value.password,
    };
    this.auth.login(user).subscribe((message) => {
      this.message = message;
      form.reset();
      if (this.message==="Успешно!"){
      this.router.navigate(['/admin', 'books']);
      }
    });

  }
}


