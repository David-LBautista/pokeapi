import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonList } from './pokemons/pages/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemons/pages/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: PokemonList,
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    component: PokemonDetailComponent,
  },
  {
    path: 'captured',
    loadChildren: () =>
      import('./pokemons/pages/captured/captured.module').then(
        (m) => m.CapturedModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
