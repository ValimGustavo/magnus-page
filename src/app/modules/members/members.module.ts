import { MembersReadComponent } from './components/members-read/members-read.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersReadComponentTable } from './table/members-read/members-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MemberRoutingModule } from './member.routing';
import { MembersSharedModule } from 'src/app/shared/components/members-info/member.module';



@NgModule({
  declarations: [MembersReadComponentTable, MembersReadComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MemberRoutingModule,
    MembersSharedModule
  ],
  exports:[MembersReadComponent]
})
export class MembersModule { }
