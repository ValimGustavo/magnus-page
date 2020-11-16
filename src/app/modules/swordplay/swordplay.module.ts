import { SharedModule } from './../../shared/components/module-shared.module';
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
import { OrderReadComponent } from './components/order/order-read/order-read.component';
import { OrderMembersTableComponent } from './table/order/order-members-table/order-members-table.component';
import { SkillPipe } from './pipes/skill.pipe';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { SwordplayRoutingModule } from './swordplay.routing';

@NgModule({
  declarations: [
    SworplayMembersReadComponent,
    SwordplayMembersTableComponent,
    SwordplayMemberInfoComponent,
    OrderInfoComponent,
    PatentInfoComponent,
    OrderReadComponent,
    OrderMembersTableComponent,
    SkillPipe,
    EvaluationComponent,
  ],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, SwordplayRoutingModule, SharedModule],
})
export class SwordplayModule {}
