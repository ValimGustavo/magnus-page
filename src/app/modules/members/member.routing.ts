import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin/admin.guard';
import { MembersInfoComponent } from 'src/app/shared/components/members-info/members-info.component';
import { MembersReadComponent } from './components/members-read/members-read.component';


//TODO: REFATORAR ROTAS, ALINHANDO CAMINHOS
const routes: Routes = [
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
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MemberRoutingModule { }
  