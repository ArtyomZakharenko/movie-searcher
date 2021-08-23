import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardListComponent} from "./card-list/card-list.component";
import {SearchListComponent} from "./search-list/search-list.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

const routes: Routes = [
  { path: 'home', component: CardListComponent},
  { path: 'favorite', loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule) },
  { path: 'movie/:id', component: MovieDetailComponent},
  { path: 'search/:query', component: SearchListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
