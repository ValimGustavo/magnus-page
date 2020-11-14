import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin/admin.guard';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { OrderReadComponent } from './components/order/order-read/order-read.component';
import { SwordplayMemberInfoComponent } from './components/swordplay-member-info/swordplay-member-info.component';
import { SworplayMembersReadComponent } from './components/sworplay-members-read/sworplay-members-read.component';
import { OrderResolver } from './resolvers/order/order-resolver.service';
import { SwordplayMemberResolver } from './resolvers/swordplayMemberResolver.resolver';


//TODO: REFATORAR ROTAS, ALINHANDO CAMINHOS
const routes: Routes = [
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SwordplayRoutingModule { }
  