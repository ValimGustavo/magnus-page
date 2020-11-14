import { AuthenticationGuard } from '../../guards/authentication.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../../guards/admin/admin.guard';
import { LoginComponent } from '../login/components/login/login.component';
import { MembersInfoComponent } from '../members/components/members-info/members-info.component';
import { MembersReadComponent } from '../members/components/members-read/members-read.component';
import { EvaluationComponent } from '../swordplay/components/evaluation/evaluation.component';
import { OrderReadComponent } from '../swordplay/components/order/order-read/order-read.component';
import { SwordplayMemberInfoComponent } from '../swordplay/components/swordplay-member-info/swordplay-member-info.component';
import { SworplayMembersReadComponent } from '../swordplay/components/sworplay-members-read/sworplay-members-read.component';
import { OrderResolver } from '../swordplay/resolvers/order/order-resolver.service';
import { SwordplayMemberResolver } from '../swordplay/resolvers/swordplayMemberResolver.resolver';


//TODO: REFATORAR ROTAS, ALINHANDO CAMINHOS
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'members',
    component: MembersReadComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'members/:id',
    component: MembersInfoComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'swordplay',
    component: SworplayMembersReadComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'swordplay/member/:id',
    component: SwordplayMemberInfoComponent,
    resolve: {
      swordplayMemberResolve: SwordplayMemberResolver
    },
    canActivate: [AdminGuard]
  },
  {
    path: 'orders',
    component: OrderReadComponent,
    resolve:{
      data: OrderResolver
    },
    canActivate: [AdminGuard]
  },
  {
    path: 'orders/member',
    component: EvaluationComponent,
    canActivate: [AdminGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }