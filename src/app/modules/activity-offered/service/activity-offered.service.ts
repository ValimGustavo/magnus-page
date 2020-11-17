
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ActivityOffered } from 'src/interfaces/acitivityOffered/activityOffered.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityOfferedService {

  constructor(
    private http: HttpClient
  ) { }

  create(data:ActivityOffered){
    return this.http.post<ActivityOffered>(environment.activityOfferedEndpoint, data)
  }

  read(){
    return this.http.get<ActivityOffered[]>(environment.activityOfferedEndpoint)
  }

  delete(activity:ActivityOffered){
    return this.http.delete<ActivityOffered>(environment.activityOfferedEndpoint + '/' + activity.id)
  }

  getById(id: string | number ){
    return this.http.get<ActivityOffered>(environment.activityOfferedEndpoint + '/' + id)
  }

  update(data:ActivityOffered){
    return this.http.put<ActivityOffered>(environment.activityOfferedEndpoint + '/' + data.id, data)
  }
}
