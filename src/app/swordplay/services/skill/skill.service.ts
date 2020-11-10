import { SKILL } from './../../../../interfaces/swordplay/skill.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

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
