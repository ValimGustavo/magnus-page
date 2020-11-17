import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing';


@NgModule({
  declarations: [LoginComponent ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginRoutingModule ],
  exports: [],
})
export class LoginModule {}
