import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersInfoComponent } from './members-info/members-info.component';
import { MemberParticipationsReadComponent } from './member-participations-read/member-participations-read.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [MembersInfoComponent, MemberParticipationsReadComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [MembersInfoComponent, MemberParticipationsReadComponent, AlertComponent]
})
export class SharedModule { }
