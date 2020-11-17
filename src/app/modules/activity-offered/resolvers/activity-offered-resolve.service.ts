import { Observable } from 'rxjs';
import { ActivityOfferedService } from './../service/activity-offered.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivityOffered } from 'src/interfaces/acitivityOffered/activityOffered.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityOfferedResolve implements Resolve<ActivityOffered[] | ActivityOffered> {

  constructor(
    private activityOfferedService:ActivityOfferedService
  ) { }

  resolve(activatedRouteSnapshot:ActivatedRouteSnapshot): Observable<ActivityOffered[] | ActivityOffered>{
    
    const id = activatedRouteSnapshot.params.id
    if(id){
      return new Observable(subscrible => {

        this.activityOfferedService.getById(id).subscribe(response => {
          subscrible.next(response)
          subscrible.complete()
        },
        error => {
          subscrible.error(error)
          subscrible.complete()
        })
      })
    }
    
    
    return new Observable(subscrible => {
      this.activityOfferedService.read().subscribe( response => {
        subscrible.next(response)
        subscrible.complete()
      },
      error => {
        subscrible.error(error)
      })
  
    })


    
  }
}
