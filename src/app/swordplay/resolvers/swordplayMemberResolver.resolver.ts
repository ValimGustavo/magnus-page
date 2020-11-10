import { SwordplayService } from './../services/swordplay.service';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { SwordplayPlayer } from 'src/interfaces/swordplay/swordplay-player.interface';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SwordplayMemberResolver implements Resolve<SwordplayPlayer> {
  constructor(
    private swordplayService: SwordplayService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<SwordplayPlayer> {
    const id = route.params.id;
    
    return new Observable(subscriber => {
        this.swordplayService.getById(id).subscribe(result => {
            subscriber.next(result)
            subscriber.complete()
        })
    })
  }
}
