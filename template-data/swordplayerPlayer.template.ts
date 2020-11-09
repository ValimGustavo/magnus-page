import { PatentExample } from './patent.template';
import { ordersExample } from './order.template';
import { memberExemple } from './member.template';
import { SwordplayPlayer } from './../src/interfaces/swordplay/swordplay-player.interface';
export const swordplayPlayerExemple:SwordplayPlayer[] = [ {
    member: memberExemple,
    orders: [
        ordersExample[0],
        ordersExample[1]
    ],
    patent: PatentExample[0]
}]