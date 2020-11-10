import { SwordplayPlayer } from 'src/interfaces/swordplay/swordplay-player.interface';
import { SKILL } from './../swordplay/skill.interface';
import { Order } from './../swordplay/orders.interfaces';

export interface OrderReadResponse {
    players: SwordplayPlayer[],
    orders: Order[],
    skills: SKILL[]
}