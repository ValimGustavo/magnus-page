import { ordersExample } from './../../../../../../template-data/order.template';
import { Order } from './../../../../../interfaces/swordplay/orders.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  constructor() { }

  
  orders:Order[]

  @Input() orderInput 

  ngOnInit(): void {
    this.orders = this.orderInput || this.orders
  }

}
