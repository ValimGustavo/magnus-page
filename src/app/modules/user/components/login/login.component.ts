import { Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private loginService:LoginService
  ) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      //TODO: Remover 
      user: ['admin'],
      password: ['123']
    });
  }

  submit() {
    this.loginService.login(this.loginForm.value).subscribe(
      (response) => {
       
        //TODO: CRIAR A LOGICA CORRETA
        if(response){
          localStorage.setItem('token', JSON.stringify(response))
          console.log('save in localStorage')
          
          //TODO: CRIAR NAVEGAÇAO PARA DASHBOARD
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
