import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";

import {
  Movie,
  MovieAdapter,
  MovieCollection, MovieCollectionAdapter,
  MovieCollectionDto,
  MovieDetail,
  MovieDetailAdapter,
  MovieDetailDto
} from "./movie.model";
import {Entity, EntityStatus} from "./entity.model";

@Injectable({providedIn: "root"})
export class MovieService {
  private API_KEY: string = 'af74547d47e746b0a7d75cc781980edb';
  private popularMoviesSubject = new BehaviorSubject<Entity<MovieCollection>>(null);
  private movieDetailSubject = new BehaviorSubject<Entity<MovieDetail>>( null);
  private similarMoviesSubject = new BehaviorSubject<Entity<MovieCollection>> (null);
  private recommendedMoviesSubject = new BehaviorSubject<Entity<MovieCollection>> (null);

  public movieDetail: Observable<Entity<MovieDetail>> = this.movieDetailSubject.asObservable();
  public popularMovies: Observable<Entity<MovieCollection>> = this.popularMoviesSubject.asObservable();
  public similarMovies: Observable<Entity<MovieCollection>> = this.similarMoviesSubject.asObservable();
  public recommendedMovies: Observable<Entity<MovieCollection>> = this.recommendedMoviesSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getPopularMovies(): void {
    const url: string = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&sort_by=popularity.desc`
    this.popularMoviesSubject.next({status: EntityStatus.Pending});
    this.http.get<MovieCollectionDto>(url).pipe(
      map((result) => new MovieCollectionAdapter(result))
    ).subscribe(
      (value) => this.popularMoviesSubject.next({value, status: EntityStatus.Success}),
      (err: HttpErrorResponse) => this.popularMoviesSubject.next({status: EntityStatus.Error, error: err})
    );
  }

  getMovieDetail(id: number): void {
    const url: string = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}`;
    this.movieDetailSubject.next({ status: EntityStatus.Pending });
    this.http.get<MovieDetailDto>(url).pipe(
      map((result) => new MovieDetailAdapter(result))
    ).subscribe(
      (value) => this.movieDetailSubject.next({ value, status: EntityStatus.Success }),
      (err: HttpErrorResponse) => this.movieDetailSubject.next({ status: EntityStatus.Error, error: err })
      );
  }

  getSimilarMovies(id: number): void {
    const url: string = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.API_KEY}`;
    this.similarMoviesSubject.next({status: EntityStatus.Pending});
    this.http.get<MovieCollectionDto>(url).pipe(
      map((result) => new MovieCollectionAdapter(result))
    ).subscribe(
      (value) => this.similarMoviesSubject.next({value, status: EntityStatus.Success}),
      (err: HttpErrorResponse) => this.similarMoviesSubject.next({status: EntityStatus.Error, error: err})
    );
  }

  getRecommendedMovies(id: number): void {
    const url: string = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.API_KEY}`;
    this.recommendedMoviesSubject.next({status: EntityStatus.Pending});
    this.http.get<MovieCollectionDto>(url).pipe(
      map((result) => new MovieCollectionAdapter(result))
    ).subscribe(
      (value) => this.recommendedMoviesSubject.next({value, status: EntityStatus.Success}),
      (err: HttpErrorResponse) => this.recommendedMoviesSubject.next({status: EntityStatus.Error, error: err})
    );
  }
}

