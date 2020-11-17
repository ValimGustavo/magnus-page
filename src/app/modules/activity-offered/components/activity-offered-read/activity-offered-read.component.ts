import { ActivityOfferedResolve } from './../../resolvers/activity-offered-resolve.service';
import { ActivityOffered } from './../../../../../interfaces/acitivityOffered/activityOffered.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityOfferedService } from './../../service/activity-offered.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-offered-read',
  templateUrl: './activity-offered-read.component.html',
  styleUrls: ['./activity-offered-read.component.scss']
})
export class ActivityOfferedReadComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private activityOfferedService:ActivityOfferedService
  ) { }

  activitiesOffered: ActivityOffered[]
  ngOnInit(): void {
    this.activitiesOffered = this.activatedRoute.snapshot.data['activityOfferedResolve']
  }

  createActivity(){
    this.router.navigate(['activityoffered/create'])
  }

  edit(activity:ActivityOffered){
    console.log(activity);
    
    this.router.navigate([`/activityoffered/${activity.id}/edit`])
  }

  //TODO: MELHORAR HTML E RESPONSES
  delete(activity:ActivityOffered){
    console.log(activity);
    this.activityOfferedService.delete(activity).subscribe(response => {
      alert('Deletado com sucesso')
      //TODO: FUTURAMENTE MUDAR PARA REMOVER ESSE RELOAD
      window.location.reload()
    },
    error => {
      alert('Erro ao deletar')
      //TODO: FUTURAMENTE MUDAR PARA REMOVER ESSE RELOAD
      window.location.reload()
    })
  }

}
