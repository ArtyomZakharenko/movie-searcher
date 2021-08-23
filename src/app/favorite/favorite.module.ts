import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoriteComponent} from "./favorite.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: FavoriteComponent }
];

@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class FavoriteModule { }
