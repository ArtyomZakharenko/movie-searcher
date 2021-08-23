import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public query: string = '';
  public isString: boolean = (/\S/.test(this.query));

  constructor(
    private router: Router
  ) { }

  search(query: string) {
    if (/\S/.test(query)) {
      this.router.navigate(['/search', query]);
    }
  }
}
