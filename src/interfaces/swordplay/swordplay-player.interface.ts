
import { Order } from './orders.interfaces';
import { Member } from '../members/members.interface';
import { Patent } from './patent.interface';
export interface SwordplayPlayer {
    member: Member,
    orders: Order[]
    patent: Patent,
}