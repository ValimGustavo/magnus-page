import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing';
import { PerfilReadComponent } from './perfil/perfil-read/perfil-read.component';
import { PerfilViewComponent } from './perfil/perfil-view/perfil-view.component';

@NgModule({
  declarations: [LoginComponent, PerfilReadComponent, PerfilViewComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginRoutingModule ],
  exports: [],
})
export class LoginModule {}
