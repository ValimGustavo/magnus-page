import { Patent } from './../swordplay/patent.interface';
import { Orders } from '../swordplay/orders.interfaces';

export interface SwordplayResponse {
    id: string | number,
    orders:Orders[],
    patent: Patent
}