import { Location } from '@angular/common';
import { Member, Participator } from 'src/interfaces/members/members.interface';
import { MemberService } from 'src/app/modules/members/services/member.service';
import { LoginService } from 'src/app/modules/user/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss'],
})
export class MemberEditComponent implements OnInit {
  formMember: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  //TODO: CRIAR RESOLVER

  updatingMember: Member;

  ngOnInit(): void {
    this.updatingMember = this.activatedRoute.snapshot.data['member'];

    this.formMember = this.formBuilder.group({
      firstName: [
        this.updatingMember.firstName,
        Validators.compose([Validators.required]),
      ],
      lastName: [
        this.updatingMember.lastName,
        Validators.compose([Validators.required]),
      ],
      contacts: this.formBuilder.group({
        phone: [
          this.updatingMember.contacts.phone,
          Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]{10}'),
          ]),
        ],
        cel: [
          this.updatingMember.contacts.cel,
          Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]{11}'),
          ]),
        ],
        email: [
          this.updatingMember.contacts.email,
          Validators.compose([Validators.required, Validators.email]),
        ],
      }),
      address: this.formBuilder.group({
        street: [
          this.updatingMember.address.street,
          Validators.compose([Validators.required]),
        ],
        number: [
          this.updatingMember.address.number,
          Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]+'),
          ]),
        ],
        neighborhood: [
          this.updatingMember.address.neighborhood,
          Validators.compose([Validators.required]),
        ],
        city: [
          this.updatingMember.address.city,
          Validators.compose([Validators.required]),
        ],
      }),
      birthDate: [
        this.updatingMember.birthDate,
        Validators.compose([Validators.required]),
      ],
    });
  }

  updateMember() {
    const dataUpdate: Member = this.formMember.value;
    dataUpdate['id'] = this.updatingMember.id;
    dataUpdate["participations"] = this.updatingMember.participations

    this.memberService.updateMember(dataUpdate).subscribe(
      (response) => {
        //TODO: remover alerts por popups
        alert('Atualizado membro ' + dataUpdate.firstName);
        this.router.navigate(['/members'])
      },
      (error) => {
        alert(
          'Encontramos problemas para executar o processo'+ 
          'por favor tente mais tarde ou entre em contato'
        );
        this.router.navigate(['/members'])
      }
    );
  }

  onParticipations(participations:Participator[]){
    this.updatingMember.participations = participations
  }

  onCancel() {
    this.router.navigate(['/members']);
  }
}
