import { ordersExample } from './../../../../../../template-data/order.template';
import { Orders } from './../../../../../interfaces/swordplay/orders.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  constructor() { }

  
  orders:Orders[]

  @Input() orderInput 

  ngOnInit(): void {
    this.orders = this.orderInput || this.orders
  }

}
