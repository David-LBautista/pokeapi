import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: [],
})
export class PokemonList implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
