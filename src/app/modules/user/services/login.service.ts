import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  async getType(user){
    const response =this.http.post<{user:string, type:string}>(environment.authenticationEndpoint, user).toPromise()

    return response



  }

  createRegister(data){
    return this.http.post(environment.createRegisterEndpoint, data)
  }
}
