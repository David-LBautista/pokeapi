import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [CommonModule, MaterialModule, SpinnerModule],
})
export class PokemonDetailModule {}
