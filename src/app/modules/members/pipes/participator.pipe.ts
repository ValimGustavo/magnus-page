import { Member } from 'src/interfaces/members/members.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'participator'
})
export class ParticipatorPipe implements PipeTransform {

  transform(member: Member, ...args: unknown[]): string {
    let participations = ''
    for(let participation of member.participations){
      if(participation.active === true){
        participations += `${participation.modality}, `
      }
    }

    participations = participations.trim()
    if(participations.endsWith(',')){
      return participations.slice(0, -1)
    }

    return participations
  }

}
