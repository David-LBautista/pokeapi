import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GET_SINGLE_POKEMON } from '../../config/routes.config';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public capturedPokemons: any[] = [];

  public get getPokemons() {
    return this.capturedPokemons;
  }

  constructor(private http: HttpClient) {}

  public getPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${GET_SINGLE_POKEMON}${id}`);
  }
}
