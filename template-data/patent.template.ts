import { Patent } from 'src/interfaces/swordplay/patent.interface';
import { PATENT } from './../src/enum/swordplay/patent.enum';
export const PatentExample:Patent[] = [
    {
        id: 1,
        description: 'description the peasant',
        name: PATENT.PEASANT
    },
    {
        id: 2,
        description: 'description the Coerl',
        name: PATENT.COERL
    }
]