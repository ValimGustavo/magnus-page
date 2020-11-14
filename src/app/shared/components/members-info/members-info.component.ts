import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/interfaces/members/members.interface';
import { MemberService } from 'src/app/modules/members/services/member.service';

@Component({
  selector: 'app-members-info',
  templateUrl: './members-info.component.html',
  styleUrls: ['./members-info.component.scss']
})
export class MembersInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private memberService: MemberService
  ) { }

  member: Member

  @Input() idInput: Member

  ngOnInit(): void {
   if(!this.idInput){
    const id = this.route.snapshot.paramMap.get('id')
    this.memberService.getMember(id).subscribe( member => this.member = member)
   }else{
     this.member = this.idInput
   }
    
  }

}
