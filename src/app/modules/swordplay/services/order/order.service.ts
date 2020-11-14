import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from 'src/interfaces/swordplay/orders.interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  read(){
    return this.http.get<Order[]>(environment.orderEndPoint)
  }

}
