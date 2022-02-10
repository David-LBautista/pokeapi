import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IAbilities,
  IStat,
  ITypes,
} from 'src/app/shared/interfaces/pokemon.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  /**
   *  @description single pokemon by id
   */
  public pokemon: any = {};

  /**
   * @description pokemon image
   */
  public pokemonImg = '';

  /**
   * @description flag to loader
   */
  public isCapturingPokemon = false;

  constructor(
    private pokeService: PokemonService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.activeRoute.params.subscribe((param) => {
      this.getPokemonById(param['id']);
    });
  }

  /**
   * @description get pokemon types from the full object
   */
  public get getTypes() {
    return this.pokemon.types;
  }

  /**
   * @description gets all the pokemon stats from the full object
   */
  public get getStats() {
    return this.pokemon.stats;
  }

  /**
   * @description gets the pokemon abilities from the full object
   */
  public get getAbilities() {
    return this.pokemon.abilities;
  }

  ngOnInit(): void {}

  /**
   * @description gets pokemon by id
   * @param id
   */
  getPokemonById(id: number): void {
    this.pokeService.getPokemon(id).subscribe((resp) => {
      this.pokemon = resp;
      this.pokemonImg = this.pokemon.sprites.front_default;
    });
  }

  /**
   * @description captures pokemon and saves them in the  pokemon-service array
   */
  public capturePokemon(): void {
    this.isCapturingPokemon = true;
    setTimeout(() => {
      this.pokeService.capturedPokemons.push(this.pokemon);
      this.isCapturingPokemon = false;
      this.snackBar.open('Congrats, you have caught a pokemon!', 'ok', {
        duration: 10000,
      });
    }, 3000);
  }

  /**
   * @description goes to the captures pokemons view
   */
  goToPokedex(): void {
    this.router.navigate(['captured']);
  }

  goToFullList(): void {
    this.router.navigate(['home']);
  }
}
