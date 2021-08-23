import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Entity} from "../entity.model";
import {MovieCollection} from "../movie.model";
import {map} from "rxjs/operators";
import {SearchService} from "../search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  private movies$: Observable<Entity<MovieCollection>> = this.searchService.searchResult;
  public faChevronRight = faChevronRight;
  public faChevronLeft = faChevronLeft;
  public query: string;
  public page: number;

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
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.query = params[`query`];
        this.page = 1;
        this.searchService.getSearchResult(this.query, this.page)
      }
    )
  }

  goToPage(counter: number) {
    this.page += counter;
    this.searchService.getSearchResult(this.query, this.page)
  }

}
