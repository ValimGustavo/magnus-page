import { SKILL } from './skill.interface';

import { ORDERS } from 'src/enum/swordplay/orders.enum';

type ID = string | number

export interface Order {
    id: ID;
    name: ORDERS;
    description: string;
    skill: SKILL | string
}