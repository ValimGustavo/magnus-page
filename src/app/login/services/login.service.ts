import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data) {
    this.http
      .post<Response>(environment.loginEndpoint, data)
      .subscribe(
        (response) => {
         
          //TODO: CRIAR A LOGICA CORRETA
          if(response){
            localStorage.setItem('token', JSON.stringify(response))
            console.log('save in localStorage')
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
