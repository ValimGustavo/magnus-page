import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { SKILL } from 'src/interfaces/swordplay/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private http: HttpClient
  ) { }


  read(){
    return this.http.get<SKILL[]>(environment.skillEndPoint)
  }
}
