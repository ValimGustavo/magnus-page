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



  firstNameCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'minlength',
    message: 'Necessario ao menos 2 letras'
  },
  ]

  lastNameCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'minlength',
    message: 'Necessario ao menos 2 letras'
  },
  ]

  streetCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'minlength',
    message: 'Necessario ao menos 2 letras'
  },
  ]

  phoneCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'pattern',
    message: 'Nao esta seguindo o padrao'
  }
  ]
  celCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'pattern',
    message: 'Nao esta seguindo o padrao'
  }
  ]

  emailCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'email',
    message: 'Nao esta seguindo o padrao'
  }
  ]



  numberCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'pattern',
    message: 'Nao esta seguindo o padrao'
  }
  ]

  neighborhoodCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'minlength',
    message: 'Necessario ao menos 2 letras'
  },
  ]

  cityCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  {
    prop: 'minlength',
    message: 'Necessario ao menos 2 letras'
  },
  ]

  birthDateCondition = [{
    prop: 'required',
    message: 'Necessario preencher campo'
  },
  ]

  ngOnInit(): void {
    //TODO: REMOVER OS TESTES
    this.formMember = this.formBuilder.group({
      firstName: ["Mario", Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      lastName: ["Bros", Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      contacts: this.formBuilder.group({
        phone: ["1111111111", Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{10}")
      ])],
        cel: ["11111111111", Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{11}")
      ])],
        email: ["mariobros@email.com", Validators.compose([
        Validators.required,
        Validators.email
      ])],
      }),
      address: this.formBuilder.group({
        street: ["Rua Ilha dos Bros", Validators.compose([
        Validators.required
      ])],
        number: [123, Validators.compose([
        Validators.required,
       // Validators.pattern("[0-9]+")
      ])],
        neighborhood: ["YARD", Validators.compose([
        Validators.required
      ])],
        city: ["Cogumelandia", Validators.compose([
        Validators.required
      ])]
      }),
      birthDate: ["01/01/1236", Validators.compose([
        Validators.required
      ])],
    }
    )
  }

  submitRegister(){
    this.loginService.createRegister(this.formMember.value).subscribe(response => {
      alert('Seu pedido de registro foi enviado')
    },
    error => {
      //TODO: CRIAR MENSAGEM AMIGAVEL E REMOVER ESSE LOG
      console.log(error)
      alert('Encontramos problemas para executar o processo, por favor tente mais tarde ou entre em contato')
      
    })

  }

  onCancel(){
    this.router.navigate(['/login'])
  }

  get firstName() {
    return this.formMember.controls.firstName
  }
  get lastName() {
    return this.formMember.controls.lastName
  }
  
  get street() {
    return this.formMember.get('address').get('street')
  }

  get number() {
    return this.formMember.get('address').get('number')
  }

  get city() {
    return this.formMember.get('address').get('city')
  }

  get neighborhood() {
    return this.formMember.get('address').get('neighborhood')
  }

  get phone() {
    return this.formMember.get('contacts').get('phone')
  }

  get cel() {
    return this.formMember.get('contacts').get('cel')
  }

  get email() {
    return this.formMember.get('contacts').get('email')
  }


  get birthDate() {
    return this.formMember.controls.birthDate
  }
  
}
