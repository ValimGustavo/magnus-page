import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
