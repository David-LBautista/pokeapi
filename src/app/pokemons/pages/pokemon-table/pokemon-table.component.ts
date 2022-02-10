import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PokemonService } from '../../../shared/services/pokemon.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css'],
})
export class PokemonTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  /**
   * @description looks for the matSort in HTML
   */
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * @description columns to display in html
   */
  public displayedColumns: string[] = ['position', 'name', 'type', 'ability'];

  /**
   * @description array of pokemons
   */
  public pokemons: any[] = [];

  /**
   * @description total of pokemons to bring by the API
   */
  private quantity: number = 250;

  /**
   * @description data to show on the table
   */
  public dataSource = new MatTableDataSource(this.pokemons);

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * @description gets the pokemons by the API
   */
  private getPokemons(): void {
    let pokemonData;
    for (let i = 1; i < this.quantity; i++) {
      this.pokeService.getPokemon(i).subscribe((result) => {
        pokemonData = {
          position: i,
          name: result.name,
          type: result.types[0].type.name,
          ability: result.abilities[0].ability.name,
        };
        this.pokemons.push(pokemonData);
        this.dataSource = new MatTableDataSource(this.pokemons);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

  /**
   * @description sorts the table
   */
  ngAfterViewInit(): void {
    this.getPokemons();
    this.dataSource.sort = this.sort;
  }

  /**
   * @description filters the columns
   * @param event
   */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * @description gets the selected row number
   * @param row
   */
  public getRow(row: { position: number }): void {
    this.router.navigateByUrl(`detail/${row.position}`);
  }
}
