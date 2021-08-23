import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MovieService} from "../movie.service";
import {Observable} from "rxjs";
import {MovieCollection, MovieDetail} from "../movie.model";
import {map} from "rxjs/operators";
import {Entity, EntityStatus} from "../entity.model";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movieDetails$: Observable<Entity<MovieDetail>> = this.movieService.movieDetail;
  public detailValue$: Observable<MovieDetail> = this.movieDetails$.pipe(
    map((entity) => entity.value)
  );
  public detailStatus$: Observable<EntityStatus> = this.movieDetails$.pipe(
    map((entity) => entity.status)
  );
  public detailError$ = this.movieDetails$.pipe(
    map((entity) => entity.error)
  );

  public similarMovies$: Observable<Entity<MovieCollection>> = this.movieService.similarMovies;
  public similarMoviesValue$ = this.similarMovies$.pipe(
    map((entity) => entity.value)
  );
  public similarMoviesStatus$ = this.similarMovies$.pipe(
    map((entity) => entity.status)
  );
  public similarMoviesError$ = this.similarMovies$.pipe(
    map((entity) => entity.error)
  );

  public recommendedMovies$: Observable<Entity<MovieCollection>> = this.movieService.recommendedMovies;
  public recommendedMoviesValue$ = this.recommendedMovies$.pipe(
    map((entity) => entity.value)
  );
  public recommendedMoviesStatus$ = this.recommendedMovies$.pipe(
    map((entity) => entity.status)
  );
  public recommendedMoviesError$ = this.recommendedMovies$.pipe(
    map((entity) => entity.error)
  );

  public faLink = faLink;
  public faStar = faStar;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      let id  = param['id'];
      this.movieService.getMovieDetail(id);
      this.movieService.getSimilarMovies(id);
      this.movieService.getRecommendedMovies(id);
    });
  }
}
