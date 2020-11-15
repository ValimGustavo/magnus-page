import { MemberCreateComponent } from './../members/components/member-create/member-create/member-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


//TODO: REFATORAR ROTAS, ALINHANDO CAMINHOS
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'criarconta',
    component: MemberCreateComponent
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }
  