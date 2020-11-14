
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SwordplayResponse } from 'src/interfaces/backend/swordplay.backend.interface';
import { Member } from 'src/interfaces/members/members.interface';
import { SwordplayPlayer } from 'src/interfaces/swordplay/swordplay-player.interface';


@Injectable({
  providedIn: 'root',
})
export class SwordplayService {
  constructor(private http: HttpClient) {}

  
  getById(id: string | number):Observable<SwordplayPlayer> {
    const response$:Observable<SwordplayPlayer> = new Observable((subscribe) => {
      this.http
        .get<Member>(environment.memberEndPoint + '/' + id)
        .subscribe((member) => {
          this.http
            .get<SwordplayPlayer>(
              environment.swordplayEndPoint + '/' + member.id
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
      this.http.get<Member[]>(environment.memberEndPoint).subscribe(members => {
        this.http.get<SwordplayResponse[]>(environment.swordplayEndPoint).subscribe( swordplayerList => {
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
