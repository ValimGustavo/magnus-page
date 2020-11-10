import { Patent } from './../swordplay/patent.interface';
import { Order } from '../swordplay/orders.interfaces';

export interface SwordplayResponse {
    id: string | number,
    orders:Order[],
    patent: Patent
}