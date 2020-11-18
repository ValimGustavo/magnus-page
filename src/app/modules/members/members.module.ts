import { ReactiveFormsModule } from '@angular/forms';
import { MembersReadComponent } from './components/members-read/members-read.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersReadComponentTable } from './table/members-read/members-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MemberRoutingModule } from './member.routing';
import { MemberCreateComponent } from './components/member-create/member-create/member-create.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { ParticipatorPipe } from './pipes/participator.pipe';
import { SharedModule } from 'src/app/shared/components/module-shared.module';
import { MemberParticipationsReadComponent } from 'src/app/shared/components/member-participations-read/member-participations-read.component';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';



@NgModule({
  declarations: [MembersReadComponentTable, MembersReadComponent, MemberCreateComponent, MemberEditComponent, ParticipatorPipe ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MemberRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[MembersReadComponent]
})
export class MembersModule { }
