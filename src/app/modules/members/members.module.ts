import { ReactiveFormsModule } from '@angular/forms';
import { MembersReadComponent } from './components/members-read/members-read.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersReadComponentTable } from './table/members-read/members-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MemberRoutingModule } from './member.routing';
import { MembersSharedModule } from 'src/app/shared/components/members-info/member.module';
import { MemberCreateComponent } from './components/member-create/member-create/member-create.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';



@NgModule({
  declarations: [MembersReadComponentTable, MembersReadComponent, MemberCreateComponent, MemberEditComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MemberRoutingModule,
    MembersSharedModule,
    ReactiveFormsModule
  ],
  exports:[MembersReadComponent]
})
export class MembersModule { }
