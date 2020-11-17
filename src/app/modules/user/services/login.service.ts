import { Member } from 'src/interfaces/members/members.interface';
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
    
    return this.http
      .post<Response>(environment.loginEndpoint, data)
      
  }

  async getType(user){
    const response =this.http.post<{user:string, type:string}>(environment.authenticationEndpoint, user).toPromise()

    return response



  }

  createRegister(data:Member){
    return this.http.post(environment.memberEndPoint, data)
  }
}
