import { LoginService } from 'src/app/modules/user/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/interfaces/members/members.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {

  
  formMember: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
    this.formMember = this.formBuilder.group({
      firstName: [null, Validators.compose([
        Validators.required
      ])],
      lastName: [null, Validators.compose([
        Validators.required
      ])],
      contacts: this.formBuilder.group({
        phone: [null, Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{10}")
      ])],
        cel: [null, Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{11}")
      ])],
        email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      }),
      address: this.formBuilder.group({
        street: [null, Validators.compose([
        Validators.required
      ])],
        number: [null, Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]+")
      ])],
        neighborhood: [null, Validators.compose([
        Validators.required
      ])],
        city: [null, Validators.compose([
        Validators.required
      ])]
      }),
      birthDate: [null, Validators.compose([
        Validators.required
      ])],
    }
    )
  }

  submitRegister(){
    console.log(this.formMember)
    this.loginService.createRegister(this.formMember).subscribe(response => {
      alert('Seu pedido de registro foi enviado')
    },
    error => {
      alert('Encontramos problemas para executar o processo, por favor tente mais tarde ou entre em contato')
    })

  }

  onCancel(){
    this.router.navigate(['/login'])
  }
}
