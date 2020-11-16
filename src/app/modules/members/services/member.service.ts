import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/interfaces/members/members.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  memberEndpoint = 'http://localhost:3000/members'

  getMember(id: string | number):Observable<Member>{
    const url = this.memberEndpoint + '/' + id
    return this.http.get<Member>(url)
  }
  
  read():Observable<Member[]>{
    return this.http.get<Member[]>(this.memberEndpoint)
  }

  updateMember(member:Member){
    console.log(member)
    //TODO: CRIAR CODIGO CORRETO 
    return this.http.put<Member>(this.memberEndpoint + '/'+ member.id, member)
  }

  deleteMember(id:string | number){
    return this.http.delete(this.memberEndpoint + '/' + id)
  }


}
