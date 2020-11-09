import { PatentExample } from './../../../../../../template-data/patent.template';
import { PATENT } from 'src/enum/swordplay/patent.enum';
import { Component, Input, OnInit } from '@angular/core';
import { Patent } from 'src/interfaces/swordplay/patent.interface';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-patent-info',
  templateUrl: './patent-info.component.html',
  styleUrls: ['./patent-info.component.scss']
})
export class PatentInfoComponent implements OnInit {

  constructor() { }
  patent: Patent

  @Input() patentInput: Patent

  ngOnInit(): void {
    this.patent = this.patentInput || this.patent
  }

}
