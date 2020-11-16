import { catchError } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Member, Participator } from 'src/interfaces/members/members.interface';
import { MemberService } from 'src/app/modules/members/services/member.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-members-info',
  templateUrl: './members-info.component.html',
  styleUrls: ['./members-info.component.scss'],
})
export class MembersInfoComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private location: Location,
    private router: Router
  ) {}

  member: Member;

  @Input() idInput: Member;

  ngOnInit(): void {
    //TODO: MUDAR PARA RESOLVER

    if (!this.idInput) {
      this.member = this.activatedRoute.snapshot.data['member'];
    } else {
      this.member = this.idInput;
    }

  }

  goToUpdateMember() {
    this.router.navigate([`/members/${this.member.id}/edit`]);
  }

  onParticipations(participations: Participator[]){
    this.member.participations = participations
  }
  //TODO: IMPLEMENTAR MODO DE APENAS ADMINSTRADOR VER ESSE BOTAO
  // ATRAVES DO TIPO DE USER EM CONJUNTO COM ngIF
  deleteMember() {
    this.memberService.deleteMember(this.member.id).subscribe(
      (response) => {
        alert('membro foi deletado com sucesso')
        this.router.navigate(['/members'])
      },
      (error) => {
        alert('Erro ao deletar membro')
        this.router.navigate(['/members'])
      }
    );
  }
  backPage() {
    this.location.back();
  }
}
