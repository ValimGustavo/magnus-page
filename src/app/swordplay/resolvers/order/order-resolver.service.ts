import { SwordplayService } from './../../services/swordplay.service';
import { SkillService } from './../../services/skill/skill.service';
import { MemberService } from './../../../members/services/member.service';
import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { Member } from 'src/interfaces/members/members.interface';
import { Order } from 'src/interfaces/swordplay/orders.interfaces';
import { OrderReadResponse } from 'src/interfaces/backend/orders.backend.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderResolver implements Resolve<any> {
  constructor(
    private orderService: OrderService,
    private swordplayService: SwordplayService,
    private skillService: SkillService
  ) {}

  resolve(route: ActivatedRouteSnapshot):Observable<OrderReadResponse>{
    return new Observable((subscribe) => {
      this.swordplayService.read().subscribe((players) => {
        this.orderService.read().subscribe(orders => {
         this.skillService.read().subscribe(skills => {
          subscribe.next({
            players,
            orders,
            skills
          })

          subscribe.complete()
         })
        });
      });
    });
  }
}
