import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipationsService {

  constructor(
    private http:HttpClient
  ) { }

  read(){
    return this.http.get(environment.activitiesEndpoind)
  }
}
