import { SKILL } from './../../enum/swordplay/skill.enum';

import { Order } from './orders.interfaces';
export interface Train {
  day: Date;
  training: informationTrain[]
}


export interface informationTrain {
  order: Partial<Order>;
  skillDay: typeof SKILL | string;
};