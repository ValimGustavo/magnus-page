import { MemberService } from 'src/app/modules/members/services/member.service';
import { Observable, Subscriber } from 'rxjs';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Member } from 'src/interfaces/members/members.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoMemberResolve implements Resolve<Member> {

  constructor(
    private router:Router,
    private memberService:MemberService
  ) { }

  resolve(activatedRouteSnapshot:ActivatedRouteSnapshot):Observable<Member>{

    const id = activatedRouteSnapshot.params.id

    return new Observable(subscriber => {
      this.memberService.getMember(id).subscribe(member => {
        subscriber.next(member)
        subscriber.complete()
      })
    })
  }
}
