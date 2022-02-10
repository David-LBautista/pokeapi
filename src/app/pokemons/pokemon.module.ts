import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PokemonList } from './pages/pokemon-list/pokemon-list.component';
import { PokemonTableComponent } from './pages/pokemon-table/pokemon-table.component';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
  declarations: [PokemonList, PokemonTableComponent],
  exports: [PokemonList],
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule],
})
export class PokemonModule {}
