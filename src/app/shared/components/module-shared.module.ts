import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersInfoComponent } from './members-info/members-info.component';
import { MemberParticipationsReadComponent } from './member-participations-read/member-participations-read.component';



@NgModule({
  declarations: [MembersInfoComponent, MemberParticipationsReadComponent],
  imports: [
    CommonModule
  ],
  exports: [MembersInfoComponent, MemberParticipationsReadComponent]
})
export class SharedModule { }
