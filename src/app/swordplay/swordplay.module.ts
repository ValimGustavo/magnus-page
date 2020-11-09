import { MembersInfoComponent } from './../members/components/members-info/members-info.component';
import { MembersModule } from './../members/members.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SworplayMembersReadComponent } from './components/sworplay-members-read/sworplay-members-read.component';
import { SwordplayMembersTableComponent } from './table/swordplay-members-table/swordplay-members-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SwordplayMemberInfoComponent } from './components/swordplay-member-info/swordplay-member-info.component';
import { OrderInfoComponent } from './components/order/order-info/order-info.component';
import { PatentInfoComponent } from './components/patent/patent-info/patent-info.component';

@NgModule({
  declarations: [
    SworplayMembersReadComponent,
    SwordplayMembersTableComponent,
    SwordplayMemberInfoComponent,
    OrderInfoComponent,
    PatentInfoComponent,
  ],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MembersModule],
})
export class SwordplayModule {}
