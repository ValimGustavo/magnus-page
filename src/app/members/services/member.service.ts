import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../../../interfaces/members/members.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'http://localhost:3000/members'

  getMember(id: string | number):Observable<Member>{
    const url = this.url + '/' + id
    return this.http.get<Member>(url)
  }
  
  read():Observable<Member[]>{
    return this.http.get<Member[]>(this.url)
  }


}
