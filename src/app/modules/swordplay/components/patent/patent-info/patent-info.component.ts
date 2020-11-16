import { Router } from '@angular/router';
import { PATENT } from 'src/enum/swordplay/patent.enum';
import { Component, Input, OnInit } from '@angular/core';
import { Patent } from 'src/interfaces/swordplay/patent.interface';
import { ThrowStmt } from '@angular/compiler';
import { SwordplayerDataSharedService } from '../../../services/shared/swordplayer-data-shared.service';

@Component({
  selector: 'app-patent-info',
  templateUrl: './patent-info.component.html',
  styleUrls: ['./patent-info.component.scss']
})
export class PatentInfoComponent implements OnInit {

  constructor(
    private swordplayerDataSharedService: SwordplayerDataSharedService,
    private route: Router
  ) { }
  patent: Patent

  @Input() patentInput: Patent
  @Input() idMember: string | number

  ngOnInit(): void {
    this.patent = this.patentInput || this.patent
  }

  goToEvaluation(){
    this.route.navigate([`swordplay/member/${this.idMember}/evaluation`])
  }

}
