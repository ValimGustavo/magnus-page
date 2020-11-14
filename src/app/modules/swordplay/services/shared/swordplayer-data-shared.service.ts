import { Injectable } from '@angular/core';
import { SwordplayPlayer } from 'src/interfaces/swordplay/swordplay-player.interface';

@Injectable({
  providedIn: 'root'
})
export class SwordplayerDataSharedService {

  private state: SwordplayPlayer
  constructor() { }

  setState(state: SwordplayPlayer){
    this.state = state
  }

  getState(){
    return this.state
  }
}
