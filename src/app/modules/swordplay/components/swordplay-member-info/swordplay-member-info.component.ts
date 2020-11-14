import { SwordplayService } from './../../services/swordplay.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { swordplayPlayerExemple } from 'template-data/swordplayerPlayer.template';
import { SwordplayPlayer } from 'src/interfaces/swordplay/swordplay-player.interface';

@Component({
  selector: 'app-swordplay-member-info',
  templateUrl: './swordplay-member-info.component.html',
  styleUrls: ['./swordplay-member-info.component.scss'],
})
export class SwordplayMemberInfoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  swordplayPlayer: SwordplayPlayer;
  ngOnInit(): void {
    this.swordplayPlayer = this.activatedRoute.snapshot.data[
      'swordplayMemberResolve'
    ];
  }
}
