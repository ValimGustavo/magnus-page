import { MembersReadComponent } from './components/members-read/members-read.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersReadComponentTable } from './table/members-read/members-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MembersInfoComponent } from './components/members-info/members-info.component';



@NgModule({
  declarations: [MembersReadComponentTable, MembersReadComponent, MembersInfoComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports:[MembersInfoComponent]
})
export class MembersModule { }
