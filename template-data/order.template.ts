import { SKILL } from './../src/enum/swordplay/skill.enum';
import { ORDERS } from 'src/enum/swordplay/orders.enum';
import { Order } from './../src/interfaces/swordplay/orders.interfaces';
export const ordersExample:Order[] = [
    {
        id: 1,
        name: ORDERS.BOW,
        description: 'Order the bow',
        skill: SKILL.BASIC
    },
    {
        id: 2,
        name: ORDERS.DUAL,
        description: 'Order the dual',
        skill: SKILL.ADVANCED
    },
    {
        id: 3,
        name: ORDERS.SHIELD,
        description: 'Order the shield',
        skill: SKILL.BASIC
    }
]