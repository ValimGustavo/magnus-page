import { SwordplayerDataSharedService } from './../../services/shared/swordplayer-data-shared.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/interfaces/swordplay/orders.interfaces';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent implements OnInit {
  constructor(
    private swordplayerDataSharedService: SwordplayerDataSharedService
  ) {}
  orders: Order[];

  show = true;

  trainingOfTheDay = {
    day: '05/05/2021',
    training: [
      {
        order: 'Arco',
        skill: 'basico',
      },
      {
        order: 'Escudo',
        skill: 'basico',
      },
      {
        order: 'Lança',
        skill: 'basico',
      },
      {
        order: 'Dual',
        skill: 'basico',
      },
    ],
  };

  ngOnInit(): void {
    this.orders = this.swordplayerDataSharedService.getState().orders;
  }

  conclusion() {
    this.show = false;
  }
}
