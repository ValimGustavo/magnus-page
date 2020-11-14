import { Pipe, PipeTransform } from '@angular/core';
import { SKILL } from 'src/enum/swordplay/skill.enum';
import { SwordplayPlayer } from 'src/interfaces/swordplay/swordplay-player.interface';

@Pipe({
  name: 'skill',
})
export class SkillPipe implements PipeTransform {
  transform(player: SwordplayPlayer, order: string): any {
    
    let skillPlayer: any = SKILL.INITIAL

    for(let orderPlayer of player.orders){
      if(orderPlayer.name === order){
        skillPlayer = orderPlayer.skill
      }
    }

    return skillPlayer
  }
}
