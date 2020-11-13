import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { informationTrain } from './../../../../interfaces/swordplay/train.interface';
import { SKILL } from './../../../../enum/swordplay/skill.enum';
import { SwordplayPlayer } from './../../../../interfaces/swordplay/swordplay-player.interface';
import { SwordplayerDataSharedService } from './../../services/shared/swordplayer-data-shared.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/interfaces/swordplay/orders.interfaces';
import { Train } from 'src/interfaces/swordplay/train.interface';
import { ORDERS } from 'src/enum/swordplay/orders.enum';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent implements OnInit {
  constructor(
    private swordplayerDataSharedService: SwordplayerDataSharedService,
    private router: Router,
    private http: HttpClient
  ) {}
  obtainedOrders: Order[];

  swordplayPlayer: SwordplayPlayer;

  show = true;

  trainingOfTheDay: Train = {
    day: new Date('05/05/2021'),
    training: [
      {
        order: {
          id: 1,
          name: ORDERS.BOW,
          description: 'descricao de arco',
        },
        skillDay: SKILL.MASTER,
      },
      {
        order: {
          id: 2,
          name: ORDERS.DUAL,
          description: 'descricao de dual',
        },
        skillDay: SKILL.BASIC,
      },
      {
        order: {
          id: 3,
          name: ORDERS.SHIELD,
          description: 'descricao de escudo',
        },
        skillDay: SKILL.ADVANCED,
      },
      {
        order: {
          id: 4,
          name: ORDERS.SPEAR,
          description: 'descricao de lança',
        },
        skillDay: SKILL.ADVANCED,
      },
    ],
  };

  ngOnInit(): void {
    this.swordplayPlayer = this.swordplayerDataSharedService.getState();
    this.obtainedOrders = this.swordplayPlayer?.orders;
  }

  conclusion(dataTrain: informationTrain) {
    console.log(dataTrain);
    const train = this.trainingOfTheDay.training.find((train) => {
      if (train.order.id === dataTrain.order.id) {
        return train;
      }
    });

    let found = false;
    if (train) {
      this.swordplayPlayer.orders.forEach((order) => {
        if (order.id === train.order.id) {
          order.skill = train.skillDay;
          found = true;
        }
      });

      if (!found) {
        const newOrder: Order = {
          id: dataTrain.order.id,
          description: dataTrain.order.description,
          name: dataTrain.order.name,
          skill: dataTrain.skillDay,
        };

        this.swordplayPlayer.orders.push(newOrder);
        console.log(JSON.stringify(this.swordplayPlayer.orders, null, 2));
      }
    }
    this.show = !this.show;

    this.http
      .put(environment.swordplayEndPoint +'/'+this.swordplayPlayer.member.id, this.swordplayPlayer)
      .subscribe(
        (response) => {
          console.log(response)
          this.router.navigate(['/orders']);
        },
        (error) => {
          console.log('error: ', error);
        }
      );
  }
}
