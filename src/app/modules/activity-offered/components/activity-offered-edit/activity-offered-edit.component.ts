import { ActivityOffered } from './../../../../../interfaces/acitivityOffered/activityOffered.interface';
import { ActivityOfferedService } from './../../service/activity-offered.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-offered-edit',
  templateUrl: './activity-offered-edit.component.html',
  styleUrls: ['./activity-offered-edit.component.scss'],
})
export class ActivityOfferedEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private activityOfferedService: ActivityOfferedService,
    private router:Router
  ) {}

  activityForm: FormGroup;
  activityUpdating:ActivityOffered
  ngOnInit(): void {
    this.activityUpdating = this.activatedRoute.snapshot.data[
      'activityOfferedResolve'
    ];
    this.activityForm = this.formBuilder.group({
      name: [this.activityUpdating.name, Validators.compose([Validators.required])],
      description: [
        this.activityUpdating.description,
        Validators.compose([Validators.required]),
      ],
    });
  }

  update() {
    const data = this.activityForm.value
    data['id'] = this.activityUpdating.id
    this.activityOfferedService.update(data).subscribe( response => {
      alert('atualizado com sucesso')
      this.router.navigate(['/activityoffered'])
    },
    error => {
      alert('erro ao atualizar')
      this.router.navigate(['/activityoffered'])
    })
  }

  close(){
    this.router.navigate(['/activityoffered'])
  }
}
