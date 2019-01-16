import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HEROES } from './mock-heroes';
import { Observable, of , Subscription} from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,private http: HttpClient) { }
  
  getHeroes(): Observable<Pokemon[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Pokemon> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));

    return this.http.get<Pokemon>(`http://localhost:3000/search/${id}`);

  
  }
}
