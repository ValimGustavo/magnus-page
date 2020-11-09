import { SwordplayService } from './../../services/swordplay.service';
import { ActivatedRoute } from '@angular/router';
import { SwordplayPlayer } from './../../../../interfaces/swordplay/swordplay-player.interface';
import { Component, OnInit } from '@angular/core';
import { swordplayPlayerExemple } from 'template-data/swordplayerPlayer.template';

@Component({
  selector: 'app-swordplay-member-info',
  templateUrl: './swordplay-member-info.component.html',
  styleUrls: ['./swordplay-member-info.component.scss'],
})
export class SwordplayMemberInfoComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private swordplayService: SwordplayService
  ) {}

  swordplayPlayer: SwordplayPlayer;
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.swordplayService.getById(id).subscribe((response) => {
      this.swordplayPlayer = response;
    });
  }
}
