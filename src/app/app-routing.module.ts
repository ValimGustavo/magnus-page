import { SwordplayMemberInfoComponent } from './swordplay/components/swordplay-member-info/swordplay-member-info.component';
import { SworplayMembersReadComponent } from './swordplay/components/sworplay-members-read/sworplay-members-read.component';
import { MembersInfoComponent } from './members/components/members-info/members-info.component';
import { LoginComponent } from './login/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersReadComponent } from './members/components/members-read/members-read.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'members',
    component: MembersReadComponent
  },
  {
    path: 'members/:id',
    component: MembersInfoComponent
  },
  {
    path: 'swordplay',
    component: SworplayMembersReadComponent
  },
  {
    path: 'swordplay/member/:id',
    component: SwordplayMemberInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
