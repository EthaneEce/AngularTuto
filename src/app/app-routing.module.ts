import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent }      from './pokemons/pokemons.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'dashboard' , component: DashboardComponent },
  { path: ''          , redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes'    , component: PokemonsComponent  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
