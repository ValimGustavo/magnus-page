import { ActivityOfferedEditComponent } from './components/activity-offered-edit/activity-offered-edit.component';
import { ActivityOfferedCreateComponent } from './components/activity-offered-create/activity-offered-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin/admin.guard';
import { ActivityOfferedReadComponent } from './components/activity-offered-read/activity-offered-read.component';
import { ActivityOfferedResolve } from './resolvers/activity-offered-resolve.service';

//TODO: REFATORAR ROTAS, ALINHANDO CAMINHOS
const routes: Routes = [
  {
    path: 'activityoffered',
    component: ActivityOfferedReadComponent,
    canActivate: [AdminGuard],
    resolve:{
      activityOfferedResolve: ActivityOfferedResolve
    }
  },
  {
    path: 'activityoffered/create',
    component: ActivityOfferedCreateComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'activityoffered/:id/edit',
    component: ActivityOfferedEditComponent,
    canActivate: [AdminGuard],
    resolve:{
      activityOfferedResolve: ActivityOfferedResolve
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityOfferedRoutingModule {}
