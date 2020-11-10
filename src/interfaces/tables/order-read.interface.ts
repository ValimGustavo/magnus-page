import { Order } from '../swordplay/orders.interfaces';
import { SKILL } from '../swordplay/skill.interface';
import { SwordplayPlayer } from '../swordplay/swordplay-player.interface';

export interface OrderReadDataList {
    players: SwordplayPlayer[]
    orders: Order[]
    skills: SKILL[]
}