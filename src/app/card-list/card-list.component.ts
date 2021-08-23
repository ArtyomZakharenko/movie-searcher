import {Component, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";
import {MovieCollection} from "../movie.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Entity} from "../entity.model";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  private movies$: Observable<Entity<MovieCollection>> = this.movieService.popularMovies;

  public value$ = this.movies$.pipe(
    map((entity) => entity.value)
  );
  public status$ = this.movies$.pipe(
    map((entity) => entity.status)
  );
  public error$ = this.movies$.pipe(
    map((entity) => entity.error)
  );

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit(): void {
    this.movieService.getPopularMovies();
  }
}
