import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";

import {
  Movie,
  MovieAdapter,
  MovieCollection,
  MovieCollectionAdapter,
  MovieCollectionDto,
  MovieDetail
} from "./movie.model";
import {Entity, EntityStatus} from "./entity.model";

@Injectable({providedIn: "root"})
export class SearchService {
  private API_KEY: string = 'af74547d47e746b0a7d75cc781980edb';
  private searchResultSubject = new BehaviorSubject<Entity<MovieCollection>>(null);

  public searchResult: Observable<Entity<MovieCollection>> = this.searchResultSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getSearchResult(query: string, page: number): void {
    const url: string = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${query}&page=${page}`
    this.searchResultSubject.next({status: EntityStatus.Pending});
    this.http.get<MovieCollectionDto>(url).pipe(
      map((result) => new MovieCollectionAdapter(result))
    ).subscribe(
      (value) => this.searchResultSubject.next({value, status: EntityStatus.Success}),
      (err: HttpErrorResponse) => this.searchResultSubject.next({status: EntityStatus.Error, error: err})
    );
  }

}
