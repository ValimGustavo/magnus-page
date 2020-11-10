import { OrderResolver } from './swordplay/resolvers/order/order-resolver.service';
import { SwordplayMemberInfoComponent } from './swordplay/components/swordplay-member-info/swordplay-member-info.component';
import { SworplayMembersReadComponent } from './swordplay/components/sworplay-members-read/sworplay-members-read.component';
import { MembersInfoComponent } from './members/components/members-info/members-info.component';
import { LoginComponent } from './login/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersReadComponent } from './members/components/members-read/members-read.component';
import { SwordplayMemberResolver } from './swordplay/resolvers/swordplayMemberResolver.resolver';
import { OrderReadComponent } from './swordplay/components/order/order-read/order-read.component';

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
    component: SwordplayMemberInfoComponent,
    resolve: {
      swordplayMemberResolve: SwordplayMemberResolver
    }
  },
  {
    path: 'orders',
    component: OrderReadComponent,
    resolve:{
      data: OrderResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
