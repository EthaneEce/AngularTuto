import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  heroes = HEROES;
  
  selectedHero: Pokemon;
  

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Pokemon): void {
    this.selectedHero = hero;
  }

}
