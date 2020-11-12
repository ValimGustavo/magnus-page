
import { ORDERS } from 'src/enum/swordplay/orders.enum';
import { SKILL } from 'src/enum/swordplay/skill.enum';

type ID = string | number

export interface Order {
    id: ID;
    name: ORDERS;
    description: string;
    skill: typeof SKILL | string
}