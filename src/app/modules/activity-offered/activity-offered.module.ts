import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityOfferedRoutingModule } from './activity-offered.routing';
import { ActivityOfferedCreateComponent } from './components/activity-offered-create/activity-offered-create.component';
import { ActivityOfferedReadComponent } from './components/activity-offered-read/activity-offered-read.component';
import { ActivityOfferedEditComponent } from './components/activity-offered-edit/activity-offered-edit.component';



@NgModule({
  declarations: [ActivityOfferedCreateComponent, ActivityOfferedReadComponent, ActivityOfferedEditComponent],
  imports: [
    CommonModule,
    ActivityOfferedRoutingModule,
    ReactiveFormsModule,
    ActivityOfferedRoutingModule
  ],
  exports: []
})
export class ActivityOfferedModule { }
