import { SwordplayResponse } from './../../../interfaces/backend/swordplay.backend.interface';
import { SwordplayPlayer } from './../../../interfaces/swordplay/swordplay-player.interface';
import { Member } from './../../../interfaces/members/members.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwordplayService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000'
  private memberUrl = this.baseUrl + '/members';
  private swordplayUrl = this.baseUrl + '/swordplay'
  getById(id: string | number):Observable<SwordplayPlayer> {
    const response$:Observable<SwordplayPlayer> = new Observable((subscribe) => {
      this.http
        .get<Member>(this.memberUrl + '/' + id)
        .subscribe((member) => {
          this.http
            .get<SwordplayPlayer>(
              this.swordplayUrl + '/' + member.id
            )
            .subscribe(player => {
              const data:SwordplayPlayer = {
                member,
                orders: player.orders,
                patent: player.patent
              }
              subscribe.next(data)
            });
        });
    });

    return response$
  }

  read(){
    const response$:Observable<SwordplayPlayer[]> = new Observable(subcrible => {
      this.http.get<Member[]>(this.memberUrl).subscribe(members => {
        this.http.get<SwordplayResponse[]>(this.swordplayUrl).subscribe( swordplayerList => {
          const dataList:SwordplayPlayer[] = []

          for(let member of members){
            for(let swordplayer of swordplayerList){
              if(member.id === swordplayer.id){
                const infoMerge:SwordplayPlayer = {
                  member,
                  orders: swordplayer.orders,
                  patent: swordplayer.patent
                }
                dataList.push(infoMerge)
              }
            }
          }

          subcrible.next(dataList)
        })
      })
    })

    return response$
  }
}
