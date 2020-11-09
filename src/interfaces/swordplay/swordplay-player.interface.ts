
import { Orders } from './orders.interfaces';
import { Member } from '../members/members.interface';
import { Patent } from './patent.interface';
export interface SwordplayPlayer {
    member: Member,
    orders: Orders[]
    patent: Patent,
}