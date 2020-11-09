import { PATENT } from './../../enum/swordplay/patent.enum';
type ID = string | number

export interface Patent {
    id: ID,
    name: PATENT,
    description: string
}