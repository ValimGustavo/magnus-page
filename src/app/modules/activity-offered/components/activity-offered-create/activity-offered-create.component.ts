import { Router } from '@angular/router';
import { ActivityOfferedService } from './../../service/activity-offered.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-offered-create',
  templateUrl: './activity-offered-create.component.html',
  styleUrls: ['./activity-offered-create.component.scss'],
})
export class ActivityOfferedCreateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private activityOfferedService: ActivityOfferedService,
    private router: Router
  ) {}

  activityForm: FormGroup;

  //TODO: CRIAR AS MENSAGENS DE VALIDAÇAO
  ngOnInit(): void {
    this.activityForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    });
  }

  submit() {
    this.activityOfferedService.create(this.activityForm.value).subscribe(
      (response) => {
        alert('salvo com sucesso');
        this.router.navigate(['/activityoffered']);
      },
      (error) => {
        console.log(error);

        alert('Erro ao salvar');
        this.router.navigate(['/activityoffered']);
      }
    );
  }

  close() {
    this.router.navigate(['/activityoffered']);
  }
}
