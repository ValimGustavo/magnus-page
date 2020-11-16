import { ParticipationsService } from './../../services/participations/participations.service';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/modules/members/services/member.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Participator } from 'src/interfaces/members/members.interface';

@Component({
  selector: 'app-member-participations-read',
  templateUrl: './member-participations-read.component.html',
  styleUrls: ['./member-participations-read.component.scss']
})
export class MemberParticipationsReadComponent implements OnInit {

  constructor(
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private participationsService: ParticipationsService
  ) { }

  //interface Participator de member interface
  @Input() memberParticipations: Participator[]


  //PQ ISSO FUNCIONA????
  //@Output() newParticipatiosEvent: EventEmitter<Participator[]>
  @Output() newParticipationsEvent = new EventEmitter()

  activities: any

  participations: Participator[]
  ngOnInit(): void {  

    this.participationsService.read().subscribe(response => {
      this.activities = response
    },
    (error) => {
      console.log(error)
    })
  
    this.participations = this.memberParticipations
  }


  addActivity(activity:Participator){

    const foundRegistration = this.memberParticipations.find(memberRegistration => {
      if (memberRegistration.id === activity.id){
        return memberRegistration
      }
    })

    if(!foundRegistration){
      this.memberParticipations.push({
        id: activity.id,
        modality: activity.modality,
        active: true
      })
    }
    this.newParticipationsEvent.emit(this.memberParticipations)
  }

}
