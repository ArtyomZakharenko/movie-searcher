import {Component, Input} from '@angular/core';
import {Movie} from '../movie.model';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent {
  @Input() public movie: Movie;
  faStar = faStar;
}
