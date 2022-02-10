import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-captured',
  templateUrl: './captured.component.html',
  styleUrls: ['./captured.component.css'],
})
export class CapturedComponent implements OnInit {
  /**
   * @description columns of the mat-table
   */
  public displayedColumns: string[] = ['position', 'name', 'type', 'ability'];

  /**
   * @description captured pokemons by the user
   */
  public capturedPokemons: any[] = [];

  /**
   * @description data to draw in the mat-table
   */
  public dataSource = new MatTableDataSource(this.capturedPokemons);

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.capturePokemons();
  }

  /**
   * @description gets the captured pokemons from the service and assigns to the table
   */
  public capturePokemons(): void {
    this.capturedPokemons = this.pokeService.getPokemons;
    this.dataSource = new MatTableDataSource(this.capturedPokemons);
  }

  /**
   * @description filters columns by name, type or ability
   * @param event
   */
  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * @description redirects to full pokemon list
   */
  goToFullList(): void {
    this.router.navigate(['home']);
  }
}
