import { MemberService } from './../../services/member.service';
import { Member } from '../../../../interfaces/members/members.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  @Input() idInput: string | number

  ngOnInit(): void {
    const id = this.idInput || this.route.snapshot.paramMap.get('id')
    this.memberService.getMember(id).subscribe( member => this.member = member)
  }

}
