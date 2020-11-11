import { SwordplayPlayer } from './../../../../interfaces/swordplay/swordplay-player.interface';
import { Injectable } from '@angular/core';

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
