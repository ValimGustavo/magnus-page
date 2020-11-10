import { SKILL } from './../../../../../interfaces/swordplay/skill.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { SwordplayPlayer } from './../../../../../interfaces/swordplay/swordplay-player.interface';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/interfaces/swordplay/orders.interfaces';
import { OrderReadResponse } from 'src/interfaces/backend/orders.backend.interface';
import { OrderReadDataList } from 'src/interfaces/tables/order-read.interface';

@Component({
  selector: 'app-order-read',
  templateUrl: './order-read.component.html',
  styleUrls: ['./order-read.component.scss']
})
export class OrderReadComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }


  datalist: OrderReadDataList
  

  ngOnInit(): void {
    const data:OrderReadResponse = this.activatedRoute.snapshot.data['data']
    this.datalist = data
  }

}
